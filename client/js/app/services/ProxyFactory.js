class ProxyFactory {
    static create(objeto, props, acao) {

        return new Proxy(objeto, {
            get(target, prop, receiver) {

                if (props.includes(prop) && ProxyFactory.#ehFuncao(target[prop])) {
                    return function () {
                        const retorno = Reflect.apply(target[prop], target, arguments);

                        acao(target);

                        return retorno;
                    }
                }

                return Reflect.get(target, prop, target);
            },

            set(target, prop, value, receiver) {

                const retorno = Reflect.set(target, prop, value, target);

                if (props.includes(prop)) {
                    acao(target);
                }

                return retorno;
            }
        });

    }

    static #ehFuncao(funcao) {
        return typeof (funcao) === typeof (Function);
    }
}