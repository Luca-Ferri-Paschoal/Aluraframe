class ListaNegociacoes {
    #negociacoes;

    constructor() {
        this.#negociacoes = [];
    }

    get negociacoes() {
        return [].concat(this.#negociacoes);
    }

    get volumeTotal() {
        return this.#negociacoes.reduce((total, negociacao) => total += negociacao.volume, 0);
    }

    adiciona(negociacao) {
        this.#negociacoes.push(negociacao);
    }

    esvazia() {
        this.#negociacoes = [];
    }
}
