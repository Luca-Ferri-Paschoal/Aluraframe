class NegociacaoDao {
    #connectoin
    #store;

    constructor(connection) {
        this.#connectoin = connection;
        this.#store = 'negociacoes';
    }

    adiciona(model) {
        const negociacao = {
            data: model.data,
            quantidade: model.quantidade,
            valor: model.valor,
        }

        return new Promise((resolve, reject) => {

            const request = this.#connectoin
            .transaction([this.#store], 'readwrite')
            .objectStore(this.#store)
            .add(negociacao);

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
