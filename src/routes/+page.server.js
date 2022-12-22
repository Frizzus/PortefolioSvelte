import {MysqlPool} from '../lib/server/database/db.js';
import {DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE} from '$env/static/private';

let res = [];


/** @type {import('./$types').Actions} */
export const actions = {
    labo: async ({request}) => {
        const formData = await request.formData();
        const mots_clefs = formData.get("motclef");
        const trie = formData.get("trie");

        let cont = await MysqlPool.query(GalleryRequest(mots_clefs, trie));

        return {success: true, content: cont};
    }
};

// créer un string qui pourra passer dans une fonction de recherche dans BD
// fonction qui créer un string pour la recherche dans la BD selon les besoins

// Note à moi même : si on veut mettre une query il faut recréer une connection après avoir utilisé end()



/** @type {import('./$types').PageServerLoad} */
export async function load({ }) {

    if (!MysqlPool.isPoolDefined()) {
        MysqlPool.definePool(DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE, 10);
    }

    res = await MysqlPool.query(GalleryRequest());

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

/**
 * 

function SortRequest(request, motclef, trie) {
    /**
     * split motclef et split les motsclefs et le titre des element de la requête
     * on ajoute dans un tab les objets qui contiennent tous les motclef de la recherche 
     * 
     * on prend le tab trier et on fait un switch pour voir quelle méthode de trie on va devoir faire
     * on trie selon l'algo choisi et on retourne
     *

    let clefTab = motclef.split(' ');
    let returnTab = [];

    // vérifie les mots clefs
    request.forEach(obj => {
        let clefs = [];
        let isValid = true;
        clefs.push(...obj.mots_clefs.split('/'));
        clefs.push(...obj.title.split(' '));

        // vérifie si tous les mot rentré par l'utilisateur sont dans les mots clefs de l'obj
        clefTab.forEach(mot => {
            if (clefs.indexOf(mot) === -1) {
                isValid = false;
            }
        });

        if (isValid) {
            returnTab.push(obj);
        }
    });

    return returnTab;

}
*/

function GalleryRequest(mots = null, order = null) {
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