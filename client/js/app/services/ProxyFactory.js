class ProxyFactory {
    static create(objeto, props, acao) {

        return new Proxy(objeto, {
            get(target, prop, receiver) {

                if (props.includes(prop) && typeof (target[prop]) === typeof (Function)) {
                    return function () {
                        Reflect.apply(target[prop], target, arguments);

                        return acao(target);
                    }
                }

                return Reflect.get(target, prop, target);
            },

            set(target, prop, value, receiver) {
                if (props.includes(prop)) {
                    target[prop] = value;
                    acao(target);
                }

                return Reflect.set(target, prop, value, target);
            }
        });

    }
}