class NegociacaoService {
    #http;

    constructor() {
        this.#http = new HTTPService();
    }

    obterNegociacoesDaSemana(semanaEscolida) {

        return this.#http.get(`negociacoes/${semanaEscolida}`)
        .then(objetos =>
            this.#transformaObjetosEmNegociacoes(objetos)
        )
        .catch(erro => {
            console.log(erro);
            throw new Error(`Não foi possível obter as negociações da semana ${semanaEscolida}.`);
        });
        
    }

    obterNegociacoes() {
        return Promise.all([
            this.obterNegociacoesDaSemana('retrasada'),
            this.obterNegociacoesDaSemana('anterior'),
            this.obterNegociacoesDaSemana('atual'),
        ])
        .then(negociacoes => 
            negociacoes.reduce((arrayAchatado, array) => arrayAchatado.concat(array), [])
        );
    }

    #transformaObjetosEmNegociacoes(arrayDeObjeto) {
        return arrayDeObjeto.map(objeto =>
            new Negociacao(
                new Date(objeto.data),
                objeto.quantidade,
                objeto.valor
            )
        );
    }

    cadastra(negociacao) {
        return ConnectionFactory
        .getConnection()
        .then(connection => new NegociacaoDao(connection))
        .then(dao => dao.adiciona(negociacao))
        .then(() => 'Negociação adicionanda com sucesso')
        .catch(erro => {
            console.log(erro);
            throw new Error('Não foi possível adicionar a negociação.');
        });
    }

    lista() {
        return ConnectionFactory
        .getConnection()
        .then(connection => new NegociacaoDao(connection))
        .then(dao => dao.listaTodos())
        .catch(erro => {
            console.log(erro);
            throw new Error('Não foi possível obter as negociações.');
        });
    }

    apaga() {
        return ConnectionFactory
        .getConnection()
        .then(connection => new NegociacaoDao(connection))
        .then(dao => dao.apagaTodos())
        .then(() => 'Negociações apagadas com sucesso')
        .catch(erro => {
            console.log(erro);
            throw new Error('Não foi possível apagar as negociações.');
        });
    }

    importa(listaAtual) {
        return this.obterNegociacoes()
        .then(negociacoes => 
            negociacoes.filter(negociacao =>
                !listaAtual.some(negociacaoExistente => negociacao.isEquals(negociacaoExistente))
            )
        )
        .catch(erro => {
            console.log(erro);
            throw new Error('Não foi possível buscar negociações para importar.');
        });
    }
}
