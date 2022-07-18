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

        let self = this;

        this.#listaNegociacoes = new Proxy(new ListaNegociacoes(), {
            get(target, prop, receiver) {
                
                if(['adiciona', 'esvazia'].includes(prop) && typeof(target[prop]) === typeof(Function)) {

                    return function() {
                        Reflect.apply(target[prop], target, arguments);
                        
                        self.#negociacoesView.update(target);
                    }
                }

                return Reflect.get(target, prop);
            }
        });

        this.#negociacoesView.update(this.#listaNegociacoes);

        this.#mensagem = new Mensagem();
        this.#mensagemView = new MensagemView(pega('#mensagemView'));
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
        this.#mensagemView.update(this.#mensagem);
        
        this.#limpaCampos();
    }

    apaga() {
        this.#listaNegociacoes.esvazia();
        this.#mensagem.texto = 'Negociações apagadas com sucesso';
        this.#mensagemView.update(this.#mensagem);
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
