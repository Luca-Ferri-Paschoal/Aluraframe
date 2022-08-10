export class ListaNegociacoes {
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

    ordenaPor(coluna, criterio) {
        const valoresDaColuna = this.#negociacoes.map(negociacao => negociacao[coluna]);
        const listaOrdenada = [];
        const loops = this.#negociacoes.length;

        for (let i = 0; i < loops; i++) {
            const maiorValor = this.#encontraMaiorValor(valoresDaColuna);
            const indexMaiorValor = valoresDaColuna.indexOf(maiorValor);

            listaOrdenada.push(this.#negociacoes[indexMaiorValor]);

            this.#negociacoes.splice(indexMaiorValor, 1);
            valoresDaColuna.splice(indexMaiorValor, 1);
        }

        if (criterio === 'descrescente') {
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

}
