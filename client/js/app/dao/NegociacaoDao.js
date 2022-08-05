class NegociacaoDao {
    #connectoin
    #store;

    constructor(connection) {
        this.#connectoin = connection;
        this.#store = 'negociacoes';
    }

    adiciona(negociacoes) {
        return new Promise((resolve, reject) => {

            const request = this.#connectoin
            .transaction([this.#store], 'readwrite')
            .objectStore(this.#store)
            .add(negociacoes);

            request.onsuccess = event => {
                resolve();
            };

            request.onerror = event => {
                console.log(event.target.error);
                reject('Não foi possível adicionar a negociação.');
            };
        });
    }
}
