class NegociacaoController {
    #inputData;
    #inputQuantidade;
    #inputValor;
    #listaNegociacoes;
    #negociacoesView;
    #mensagem;
    #mensagemView;

    constructor() {
        const pega = document.querySelector.bind(document);

        this.#inputData = pega('#data');
        this.#inputQuantidade = pega('#quantidade');
        this.#inputValor = pega('#valor');

        this.#listaNegociacoes = new ListaNegociacoes();
        this.#negociacoesView = new NegociacoesView(pega('#negociacoesView'));
        this.#negociacoesView.update(this.#listaNegociacoes);

        this.#mensagem = new Mensagem();
        this.#mensagemView = new MensagemView(pega('#mensagemView'));
        this.#mensagemView.update(this.#mensagem);
    }

    adiciona(event) {
        event.preventDefault();

        const negociacao = this.#criaNegociacao();
        this.#listaNegociacoes.adiciona(negociacao);
        this.#negociacoesView.update(this.#listaNegociacoes);

        this.#mensagem.texto = 'Negociação adcionada com sucesso.';
        this.#mensagemView.update(this.#mensagem);
        
        this.#limpaCampos();
    }

    #criaNegociacao () {
        return new Negociacao(
            DateHelper.textoParaData(this.#inputData.value),
            this.#inputQuantidade.value,
            this.#inputValor.value,
        );
    }

    #limpaCampos() {
        let zero = 0;
        
        this.#inputData.value = '';
        this.#inputQuantidade.value = 1;
        this.#inputValor.value = zero.toFixed(1);

        this.#inputData.focus();
    }

}