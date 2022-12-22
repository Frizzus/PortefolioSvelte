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

        return {results:PojoIfy(MysqlPool.#getResults()), fields:PojoIfy(MysqlPool.#getFields())};
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

/** Take an Array of non Pojo and return a new array with pojo
 * 
 * @param {Array} nonPojoTab 
 * @returns 
 */
function PojoIfy(nonPojoTab = []) {
    let newPojoTab = [];
    nonPojoTab.forEach(obj => {
        newPojoTab.push({
            src: obj.src,
            alt: obj.alt,
            title: obj.title,
            caption: obj.caption,
            lien: obj.lien
        });
    });
    return newPojoTab
}

