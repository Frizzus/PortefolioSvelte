import { error } from '@sveltejs/kit';
import * as db from '../lib/server/database/db.js';

let res;


/** @type {import('./$types').Actions} */
export const actions = {
    labo: async ({cookies, request}) => {
        const formData = await request.formData();
        const mots_clefs = formData.get("motclef");
        const trie = formData.get("trie");

        cookies.set("mots_clefs", mots_clefs);
        cookies.set("trie", trie);
        return true;
    }
};



// créer un string qui pourra passer dans une fonction de recherche dans BD
// fonction qui créer un string pour la recherche dans la BD selon les besoins

// Note à moi même : si on veut mettre une query il faut recréer une connection après avoir utilisé end()



/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {

    let mots_clefs = cookies.get("mots_clefs");
    let ordre = cookies.get("trie");

    db.pool.query(db.GalleryRequest(mots_clefs, ordre), db.FetchForGallery);

    res = db.lignes;
    cookies.delete("mots_clefs");
    cookies.delete("trie");

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