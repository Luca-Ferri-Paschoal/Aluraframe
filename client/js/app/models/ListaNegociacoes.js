class ListaNegociacoes {
    #negociacoes;
    #armadilha;
    //#contexto;

    constructor(/*contexto,*/ armadilha) {
        this.#negociacoes = [];
        this.#armadilha = armadilha;
    }

    adiciona(negociacao) {
        this.#negociacoes.push(negociacao);
        this.#armadilha(this);
        //Reflect.apply(this.#armadilha, this.#contexto, [this]);
    }
    
    get negociacoes() {
        return [].concat(this.#negociacoes);
    }
    
    esvazia() {
        this.#negociacoes = [];
        this.#armadilha(this);
        //Reflect.apply(this.#armadilha, this.#contexto, [this]);
    }
}
