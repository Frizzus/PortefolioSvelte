import * as my from 'mysql';


export class MysqlPool{
    static #pool = undefined;
    static #results;
    static #fields;

    constructor(){
        throw Error("MysqlPool is a Singleton and should not be defined by hands\n");
    }

    /** Define a connection pool for the MysqlPool Singleton, you can define your pool only one time
     * 
     * @param {String} user Mysql user
     * @param {String} password password for user
     * @param {String} host where the database is hosted
     * @param {String} database the database name
     * @param {Int} connectionLimit the connection limit, it's defined at 10 by default
     */
    static definePool(user, password, host, database, connectionLimit = 10){
        if (MysqlPool.#pool === undefined) {
            MysqlPool.#pool = my.createPool({
                user: user,
                password: password,
                host: host,
                database: database,
                connectionLimit: connectionLimit
            });
        }
        else{
            throw Error("MysqlPool has already defined a connection pool, look in your code to switch database\n");
        }
    }

    /** return true if the connection pool has already been defined
     * 
     * @returns boolean
     */
    static isPoolDefined(){
        if (MysqlPool.#pool === undefined) {
            return false
        }
        else{
            return true
        }
    }

    /** 
     * 
     * @param {String} sqlRequest 
     * @returns {Object} An Unamed Object grouping the data record : {(property) results, (property) fields}
     */
    static async query(sqlRequest){
        if (MysqlPool.#pool === undefined) {
            throw Error("The connection to the database has not been intialized\n");
        }

        MysqlPool.#pool.query(sqlRequest, function (error, res, fiel) {
            if (error) {
                throw error;
            }
            MysqlPool.#setResults(res);
            MysqlPool.#setFields(fiel);
        });

        return [MysqlPool.#getResults(), MysqlPool.#getFields()]
    }

    // Private Method

    /**
     * 
     * @param {Array} res 
     */
    static #setResults(res){
        MysqlPool.#results = res;
    }

    /**
     * 
     * @param {Array} fiel 
     */
    static #setFields(fiel){
        MysqlPool.#fields = fiel;
    }

    /**
     * 
     * @returns {Object} The data of the last query
     */
    static #getResults(){
        return MysqlPool.#results;
    }

    /**
     * 
     * @returns {Object} The fields of the last query
     */
    static #getFields(){
        return MysqlPool.#fields;
    }
}

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

