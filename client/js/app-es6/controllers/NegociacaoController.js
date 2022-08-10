import { Negociacao } from './../models/Negociacao.js';
import { ListaNegociacoes } from './../models/ListaNegociacoes.js';
import { Mensagem } from './../models/Mensagem.js';
import { NegociacoesView } from './../views/NegociacoesView.js';
import { MensagemView } from './../views/MensagemView.js';
import { NegociacaoService } from './../services/NegociacaoService.js';
import { DateHelper } from './../helpers/DateHelper.js';
import { Bind } from './../helpers/Bind.js';

export class NegociacaoController {
    #inputData;
    #inputQuantidade;
    #inputValor;
    #listaNegociacoes;
    #mensagem;
    #colunaAnterior;
    #service;

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
        this.#service = new NegociacaoService();

        this.#init();
    }

    #init() {
        this.#service
        .lista()
        .then(negociacoes =>
            negociacoes.forEach(negociacao =>
            this.#listaNegociacoes.adiciona(negociacao))
        )
        .catch(erro => {
            console.log(erro);
            this.#mensagem.texto = erro;
        });
        
        setInterval(() => {
            this.#importaNegociacoes();
        }
        , 3000);
    }

    adiciona(event) {
        event.preventDefault();
        const negociacao = this.#criaNegociacao();

        this.#service
        .cadastra(negociacao)
        .then(mensagem => {
            this.#listaNegociacoes.adiciona(negociacao);
            this.#mensagem.texto = mensagem;
            this.#limpaCampos();
        })
        .catch(erro => this.#mensagem.texto = erro);
    }

    #importaNegociacoes() {
        this.#service.importa(this.#listaNegociacoes.negociacoes)
        .then(negociacoes => negociacoes.forEach(negociacao => {
            this.#listaNegociacoes.adiciona(negociacao)
        }))
        .catch(erro => this.#mensagem.texto = erro);
    }

    apagaLista() {
        this.#service
        .apaga()
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
