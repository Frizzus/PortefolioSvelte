import { error } from '@sveltejs/kit';
import * as my from 'mysql';
// bX]s2yeisdAsif*r 

let connection = my.createConnection({
    host: "localhost",
    user: "Frizzus",
    password: "bX]s2yeisdAsif*r",
    database: "portefolio"
});

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    return {
        post:{
            items:[[[{src:"favicon.svg"}, {src:"favicon.svg"}], [{src:"favicon.svg"}, {src:"favicon.svg"}]],
                   [[{src:"favicon.svg"}, {src:"favicon.svg"}], [{}, {}]],
                   [[{}, {}], [{}, {}]],
                   [[{}, {}], [{}, {}]]]
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