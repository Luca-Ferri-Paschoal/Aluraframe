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
        );;
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
}
