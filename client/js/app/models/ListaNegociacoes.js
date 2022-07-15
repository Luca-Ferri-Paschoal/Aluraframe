class ListaNegociacoes {
    #negociacoes;

    constructor() {
        this.#negociacoes = [];
    }
    
    get negociacoes() {
        return [].concat(this.#negociacoes);
    }

    adiciona(negociacao) {
        this.#negociacoes.push(negociacao);
    }
    
    esvazia() {
        this.#negociacoes = [];
    }
}
