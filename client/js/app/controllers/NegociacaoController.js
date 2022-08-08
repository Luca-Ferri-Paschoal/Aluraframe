class NegociacaoController {
    #inputData;
    #inputQuantidade;
    #inputValor;
    #listaNegociacoes;
    #mensagem;
    #colunaAnterior;

    constructor() {
        const pega = document.querySelector.bind(document);

        this.#inputData = pega('#data');
        this.#inputQuantidade = pega('#quantidade');
        this.#inputValor = pega('#valor');

        this.#listaNegociacoes = new Bind(
            new ListaNegociacoes(),
            new NegociacoesView(pega('#negociacoesView')),
            'adiciona', 'esvazia', 'ordenaPor',
        );

        this.#mensagem = new Bind(
            new Mensagem(),
            new MensagemView(pega('#mensagemView')),
            'texto',
        );

        this.#colunaAnterior = null;

        ConnectionFactory
        .getConnection()
        .then(connection => new NegociacaoDao(connection))
        .then(dao => dao.listaTodos())
        .then(listaNegociacoes =>
            listaNegociacoes.forEach(negociacao => 
                this.#listaNegociacoes.adiciona(negociacao)
            )
        )
        .catch(erro => this.#mensagem.texto = erro);

        setInterval(() => {
            this.#importaNegociacoes();
        }
        , 3000);
    }

    adiciona(event) {

        event.preventDefault();

        ConnectionFactory
        .getConnection()
        .then(connection => {
            const negociacao = this.#criaNegociacao();
            new NegociacaoDao(connection)
            .adiciona(negociacao)
            .then(mensagem => {
                this.#listaNegociacoes.adiciona(negociacao);
                this.#mensagem.texto = mensagem;
        
                this.#limpaCampos();
            });
        })
        .catch(erro => this.#mensagem.texto = erro);

    }

    #importaNegociacoes() {
        const service = new NegociacaoService();

        service.obterNegociacoes()
        .then(negociacoes => 
            negociacoes.filter(negociacao =>
                !this.#listaNegociacoes.negociacoes.some(negociacaoExistente =>
                    JSON.stringify(Negociacao.atributos(negociacao)) === JSON.stringify(Negociacao.atributos(negociacaoExistente))
                )
            )
        )
        .then(negociacoes => {
            negociacoes
                .forEach(negociacao => this.#listaNegociacoes.adiciona(negociacao)
            );
            
            this.#mensagem.texto = 'Negociacões importadas com sucesso.';
        })
        .catch(erro => this.#mensagem.texto = erro);
    }

    apagaLista() {
        ConnectionFactory
        .getConnection()
        .then(connection => new NegociacaoDao(connection))
        .then(dao => dao.apagaTodos())
        .then(mensagem => {
            this.#listaNegociacoes.esvazia();
            this.#mensagem.texto = mensagem;
        })
        .catch(erro => this.#mensagem.texto = erro);
    }

    ordenaLista(coluna) {  
        let criterio = null;

        if (this.#colunaAnterior === coluna) {
            this.#colunaAnterior = null;
            criterio = 'descrescente';
        } else {
            this.#colunaAnterior = coluna;
            criterio = 'crescente';
        }

        this.#listaNegociacoes.ordenaPor(coluna, criterio);
    }

    #criaNegociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this.#inputData.value),
            parseInt(this.#inputQuantidade.value),
            parseFloat(this.#inputValor.value),
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
