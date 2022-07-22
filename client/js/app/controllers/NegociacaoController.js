class NegociacaoController {
    #inputData;
    #inputQuantidade;
    #inputValor;
    #listaNegociacoes;
    #mensagem;

    constructor() {
        const pega = document.querySelector.bind(document);

        this.#inputData = pega('#data');
        this.#inputQuantidade = pega('#quantidade');
        this.#inputValor = pega('#valor');

        this.#listaNegociacoes = new Bind(
            new ListaNegociacoes(),
            new NegociacoesView(pega('#negociacoesView')),
            'adiciona', 'esvazia',
        )

        this.#mensagem = new Bind(
            new Mensagem(),
            new MensagemView(pega('#mensagemView')),
            'texto',
        );
    }

    adiciona(event) {
        event.preventDefault();

        const negociacao = this.#criaNegociacao();

        this.#listaNegociacoes.adiciona(negociacao);
        this.#mensagem.texto = 'Negociação adcionada com sucesso.';

        this.#limpaCampos();
    }

    importaNegociacoes() {
        const service = new NegociacaoService();

        service.obterNegociacoes()
        .then(negociacoes => {
            negociacoes
                .forEach(negociacao => this.#listaNegociacoes.adiciona(negociacao)
            );
            
            this.#mensagem.texto = 'Negociacões importadas com sucesso.'
        })
        .catch(erro => this.#mensagem.texto = erro);
    }

    apagaLista() {
        this.#listaNegociacoes.esvazia();
        this.#mensagem.texto = 'Negociações apagadas com sucesso';
    }

    #criaNegociacao() {
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
