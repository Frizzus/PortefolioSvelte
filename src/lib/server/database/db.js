import * as my from 'mysql';
export let lignes = [];

// bX]s2yeisdAsif*r 
export const pool = my.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "Frizzus",
    password: "bX]s2yeisdAsif*r",
    database: "portefolio"
});

 export function FetchForGallery(error, results){
    if (error) throw error;
    else {
        lignes = [];
        
        // On fait le tour du tableau results 4 à 4 pour prendre tous les résultat et ont fait en sorte que le tableau de fin soit div par 4 pour le component Gallery
        for (let i = 0; i < (results.length + (4 - (results.length % 4))); i += 4) {
            // à chaque itération le programme push dans lignes une ligne de la gallery et prévoit que l'indice peut être plus haut que le nombre d'item dans results en ajoutant un objet vide à la place (géré par Gallery)
            lignes.push([
                [(results[i] !== undefined) ? { src: results[i].src, alt: results[i].alt, title: results[i].title, caption: results[i].caption, lien: results[i].lien } : {}


                    , (results[i + 1] !== undefined) ? { src: results[i + 1].src, alt: results[i + 1].alt, title: results[i + 1].title, caption: results[i + 1].caption, lien: results[i + 1].lien } : {}],


                [(results[i + 2] !== undefined) ? { src: results[i + 2].src, alt: results[i + 2].alt, title: results[i + 2].title, caption: results[i + 2].caption, lien: results[i + 2].lien } : {}


                    , (results[i + 3] !== undefined) ? { src: results[i + 3].src, alt: results[i + 3].alt, title: results[i + 3].title, caption: results[i + 3].caption, lien: results[i + 3].lien } : {}]
            ]);
        }
    }
}

export function GalleryRequest(mots = null, order = null) {
    let request;

    // dans tous les cas on voudras
    request = 'SELECT src, alt, title, caption, lien FROM pannel INNER JOIN website ON website.id_website = pannel.id_website ';
    // Si il y a des mots-clefs dans l'input on ajoute une cause where
    if (mots !== null) {
        request += 'WHERE mots_clefs';

        mots.split(' ').forEach(element => {
            request += ` LIKE \'%${element}%\' AND`;
        });

        // Attention à ne pas couper à -4 ce qui enlèverai l'espace et donnerais ANDORDER dans le cas ou il faut trier les résultas
        request = request.slice(0,request.length - 3);
    }
    //Si order est  défini on ajoute la clause ORDER BY pour trier les lignes
    switch (order) {
        case "lexi":
            request += "ORDER BY title ASC";
            break;
    
        case "decroissant":
            request += "ORDER BY date_ajout DESC";
            break;
        
        case "croissant":
            request += "ORDER BY date_ajout ASC";
            break;
    }
    // On oublie pas de refermer la requête
    request += ";";
    return request;
}

