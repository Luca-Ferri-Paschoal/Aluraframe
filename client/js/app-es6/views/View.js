export class View {
    #elemento

    constructor(elemento) {
        if (this.constructor === View) {
            throw new Error('Não se pode declarar uma instância de View, que é uma classe abstrata.');
        }
        this.#elemento = elemento;
    }

    _template() {
        throw new Error('O método template deve ser implementado nas classes que herdam a classe View');
    }

    update(model) {
        this.#elemento.innerHTML = this._template(model);
    }
}
