export class ConnectionFactory {
    static #stores = ['negociacoes'];
    static #version = 5;
    static #dbName = 'aluraframe';
    static #connection = null;
    static #metodoClose = null;

    constructor() {
        throw new Error('Não é possível criar instâncias de ConnectionFactory.');
    }

    static getConnection() {
        return new Promise((resolve, reject) => {
            const openRequest = window.indexedDB.open(this.#dbName, this.#version);

            openRequest.onupgradeneeded = event => {
                ConnectionFactory.#createStore(event.target.result);
            };

            openRequest.onsuccess = event => {
                if (this.#connection === null) {
                    this.#connection = event.target.result;

                    this.#metodoClose = this.#connection.close.bind(this.#connection);

                    this.#connection.close = function() {
                        throw new Error('Você não pode fechar diretamente uma conexão.');
                    };
                }

                resolve(this.#connection);
            };

            openRequest.onerror = event => {
                console.log(event.target.error);
                reject(event.target.error.name);
            };
        });
    }

    static #createStore(connection) {

        this.#stores.forEach(store => {

            if (connection.objectStoreNames.contains(store)) {
                connection.deleteObjectStore(store);
            }

            connection.createObjectStore(store, { autoIncrement: true });

        })

    }

    static closeConnection() {
        if (this.#connection !== null) {
            this.#metodoClose();
            //Sem usar o bind, você pode fazer o seguite:
            //Reflect.apply(close, this.#connection, []);
            this.#connection = null;
        }
    }
}

/* Usando o padrão de projeto Module Pattern, sem usar atributos estáticos, usando var e colocando tudo dentro do escopo de uma função anônima autoinvocável:


var ConnectionFactory = (function () {

    var stores = ['negociacoes'];
    var version = 5;
    var dbName = 'aluraframe';
    var connection = null;
    
    return class ConnectionFactory {
    
        constructor() {
            throw new Error('Não é possível criar instâncias de ConnectionFactory.');
        }
    
        static getConnection() {
            return new Promise((resolve, reject) => {
                const openRequest = window.indexedDB.open(dbName, version);
    
                openRequest.onupgradeneeded = event => {
                    ConnectionFactory.#createStore(event.target.result);
                };
    
                openRequest.onsuccess = event => {
                    if (connection === null) {
                        connection = event.target.result;
                    }
    
                    resolve(connection);
                };
    
                openRequest.onerror = event => {
                    console.log(event.target.error);
                    reject(event.target.error.name);
                };
            });
        }
    
        static #createStore(connection) {
    
            stores.forEach(store => {
    
                if (connection.objectStoreNames.contains(store)) {
                    connection.deleteObjectStore(store);
                }
    
                connection.createObjectStore(store, { autoIncrement: true });
    
            })
    
        }
    }

})();
*/
