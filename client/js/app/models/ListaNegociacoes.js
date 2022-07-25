class ListaNegociacoes {
    #negociacoes;
    static #salvaChamada = null;

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

    ordenaPor(criterio) {
        const valoresDoCriterio = this.#negociacoes.map(negociacao => negociacao[criterio]);
        const listaOrdenada = [];
        const loops = this.#negociacoes.length;

        for (let i = 0; i < loops; i++) {
            const maiorValor = this.#encontraMaiorValor(valoresDoCriterio);
            const indexMaiorValor = valoresDoCriterio.indexOf(maiorValor);

            listaOrdenada.push(this.#negociacoes[indexMaiorValor]);

            this.#negociacoes.splice(indexMaiorValor, 1);
            valoresDoCriterio.splice(indexMaiorValor, 1);
        }

        if (this.#inverterLista(criterio)) {
            listaOrdenada.reverse();
        }

        this.#negociacoes = listaOrdenada;
    }

    #encontraMaiorValor(valores) {
        let maiorValor = -Infinity;
        valores.forEach(valor => {
            if (valor > maiorValor) maiorValor = valor;
        });

        return maiorValor;
    }

    #inverterLista(criterio) {
        const chamadaAnterior = ListaNegociacoes.#salvaChamada;
        ListaNegociacoes.#salvaChamada = criterio;
        const chamadaAtual = ListaNegociacoes.#salvaChamada;

        return function () {
            if (chamadaAnterior === chamadaAtual) {
                ListaNegociacoes.#salvaChamada = null;
                return true;
            } else {
                return false;
            }
        }();
    }

}
