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

    listaTodos() {
        return new Promise((resolve, reject) => {
            const cursor = this.#connectoin
            .transaction([this.#store], 'readwrite')
            .objectStore(this.#store)
            .openCursor();

            const listaNegociacoes = [];

            cursor.onsuccess = event => {
                const atual = event.target.result;

                if (atual !== null) {
                    const dado = atual.value;

                    listaNegociacoes.push(new Negociacao(dado.data, dado.quantidade, dado.valor));

                    atual.continue();
                } else {
                    resolve(listaNegociacoes);
                }
            };

            cursor.onerror = event => {
                console.log(event.target.error);
                reject('Não foi possível listar as negociações.');
            };
        })
    }
}
