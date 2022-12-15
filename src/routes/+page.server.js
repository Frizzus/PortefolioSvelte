import { error } from '@sveltejs/kit';
import * as my from 'mysql';
// bX]s2yeisdAsif*r 


let res = getInDB();


// code pour intégrer la recherche selon le titre et selon les mots_clefs
let mots_clefs;
let ordre;
// récupérer les values en POST 
/** @type {import('./$types').Actions} */
export const actions = {
    labo: async (event) => {
        const data = await event.request.formData();
        mots_clefs = data.get("motclef");
        ordre = data.get("trie");
        console.log(mots_clefs, " : ", ordre);
        // problème soit de cache soit la solution n'est pas compat entre svelte et nodejs mysql
        // dernier recours d'abord request tout puis trier toute les données en js
        // mélange entre côté client et côté serveur pas clair
        //  regarder du coté des hooks et prendre appuie sur le thread reddit de svelte mis en marque page
        res = getInDB(mots_clefs, ordre);
        // res est pris en compte mais ça n'affiche rien si on veut console.log
    }
};

// créer un string qui pourra passer dans une fonction de recherche dans BD
// fonction qui créer un string pour la recherche dans la BD selon les besoins

// Note à moi même : si on veut mettre une query il faut recréer une connection après avoir utilisé end()



/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {

    return {
        post: {
            items: res
        }

        /**
         * src:
         * alt: text alternative pour l'image
         * title: Titre de la section
         * caption: description du site
         * url: lien vers le site
         */
    };
}



/*=============================================
=            function            =
=============================================*/

function getInDB(mots = null, order = null) {
    let request;
    let lignes = [];

    // dans tous les cas on voudras
    request = 'SELECT src, alt, title, caption, lien FROM tblwebsitepannels';
    // Si il y a des mots-clefs dans l'input on ajoute une cause where
    if (mots !== null) {
        request += ' WHERE mots_clefs';

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


    // début de la requête

    let connection = my.createConnection({
        host: "localhost",
        user: "Frizzus",
        password: "bX]s2yeisdAsif*r",
        database: "portefolio"
    });

    connection.connect(function (err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }
    });

    connection.query(request, function (error, results, fields) {
        if (error) throw error;
        else {
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
            // on ferme la connection dans le query car mysql est async et donc si on l'utilise en dehors la connection sera coupé en pleine recherche dans la BD
            
            connection.end();
            return lignes;
        }
    });

    return lignes;
}