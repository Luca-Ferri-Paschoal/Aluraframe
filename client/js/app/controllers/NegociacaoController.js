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
        
        this.#negociacoesView = new NegociacoesView(pega('#negociacoesView'));
        this.#mensagemView = new MensagemView(pega('#mensagemView'));

        
        this.#listaNegociacoes = ProxyFactory.create(
            new ListaNegociacoes(),
            ['adiciona', 'esvazia'],
            model => this.#negociacoesView.update(model),
        );

        
        this.#mensagem = ProxyFactory.create(
            new Mensagem(),
            ['texto'],
            model => this.#mensagemView.update(model),
        );

        this.#negociacoesView.update(this.#listaNegociacoes);
        this.#mensagemView.update(this.#mensagem);
    }

    get negociacoesView() {
        return this.#negociacoesView;
    }

    get listaNegociacoes() {
        return this.#listaNegociacoes;
    }

    adiciona(event) {
        event.preventDefault();

        const negociacao = this.#criaNegociacao();

        this.#listaNegociacoes.adiciona(negociacao);
        this.#mensagem.texto = 'Negociação adcionada com sucesso.';
        
        this.#limpaCampos();
    }

    apaga() {
        this.#listaNegociacoes.esvazia();
        this.#mensagem.texto = 'Negociações apagadas com sucesso';
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
