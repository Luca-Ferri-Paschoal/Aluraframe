class Negociacao {
    #data;
    #quantidade;
    #valor;
    #volume;

    constructor(data, quantidade, valor) {
        this.#data = new Date(data.getTime());
        this.#quantidade = quantidade;
        this.#valor = valor;
        this.#volume = quantidade * valor;
        Object.freeze(this);
    }

    get data() {
        return new Date(this.#data.getTime());
    }

    get quantidade() {
        return this.#quantidade;
    }

    get valor() {
        return this.#valor;
    }

    get volume() {
        return this.#volume;
    }

    isEquals(negociacaoExistente) {
        return JSON.stringify(this) === JSON.stringify(negociacaoExistente);        
    }

    atributos() {
        return {
            data: this.data,
            quantidade: this.quantidade,
            valor: this.valor,
        }
    }

}
