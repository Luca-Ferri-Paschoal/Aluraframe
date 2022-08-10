"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var _negociacoes, _encontraMaiorValor, ListaNegociacoes;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _classPrivateMethodInitSpec(obj, privateSet) {
    _checkPrivateRedeclaration(obj, privateSet);

    privateSet.add(obj);
  }

  function _classPrivateFieldInitSpec(obj, privateMap, value) {
    _checkPrivateRedeclaration(obj, privateMap);

    privateMap.set(obj, value);
  }

  function _checkPrivateRedeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
      throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
  }

  function _classPrivateMethodGet(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
      throw new TypeError("attempted to get private field on non-instance");
    }

    return fn;
  }

  function _classPrivateFieldGet(receiver, privateMap) {
    var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get");

    return _classApplyDescriptorGet(receiver, descriptor);
  }

  function _classApplyDescriptorGet(receiver, descriptor) {
    if (descriptor.get) {
      return descriptor.get.call(receiver);
    }

    return descriptor.value;
  }

  function _classPrivateFieldSet(receiver, privateMap, value) {
    var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set");

    _classApplyDescriptorSet(receiver, descriptor, value);

    return value;
  }

  function _classExtractFieldDescriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to " + action + " private field on non-instance");
    }

    return privateMap.get(receiver);
  }

  function _classApplyDescriptorSet(receiver, descriptor, value) {
    if (descriptor.set) {
      descriptor.set.call(receiver, value);
    } else {
      if (!descriptor.writable) {
        throw new TypeError("attempted to set read only private field");
      }

      descriptor.value = value;
    }
  }

  function _encontraMaiorValor2(valores) {
    var maiorValor = -Infinity;
    valores.forEach(function (valor) {
      if (valor > maiorValor) maiorValor = valor;
    });
    return maiorValor;
  }

  return {
    setters: [],
    execute: function () {
      _negociacoes = new WeakMap();
      _encontraMaiorValor = new WeakSet();

      _export("ListaNegociacoes", ListaNegociacoes = function () {
        function ListaNegociacoes() {
          _classCallCheck(this, ListaNegociacoes);

          _classPrivateMethodInitSpec(this, _encontraMaiorValor);

          _classPrivateFieldInitSpec(this, _negociacoes, {
            writable: true,
            value: void 0
          });

          _classPrivateFieldSet(this, _negociacoes, []);
        }

        _createClass(ListaNegociacoes, [{
          key: "negociacoes",
          get: function get() {
            return [].concat(_classPrivateFieldGet(this, _negociacoes));
          }
        }, {
          key: "volumeTotal",
          get: function get() {
            return _classPrivateFieldGet(this, _negociacoes).reduce(function (total, negociacao) {
              return total += negociacao.volume;
            }, 0);
          }
        }, {
          key: "adiciona",
          value: function adiciona(negociacao) {
            _classPrivateFieldGet(this, _negociacoes).push(negociacao);
          }
        }, {
          key: "esvazia",
          value: function esvazia() {
            _classPrivateFieldSet(this, _negociacoes, []);
          }
        }, {
          key: "ordenaPor",
          value: function ordenaPor(coluna, criterio) {
            var valoresDaColuna = _classPrivateFieldGet(this, _negociacoes).map(function (negociacao) {
              return negociacao[coluna];
            });

            var listaOrdenada = [];

            var loops = _classPrivateFieldGet(this, _negociacoes).length;

            for (var i = 0; i < loops; i++) {
              var maiorValor = _classPrivateMethodGet(this, _encontraMaiorValor, _encontraMaiorValor2).call(this, valoresDaColuna);

              var indexMaiorValor = valoresDaColuna.indexOf(maiorValor);
              listaOrdenada.push(_classPrivateFieldGet(this, _negociacoes)[indexMaiorValor]);

              _classPrivateFieldGet(this, _negociacoes).splice(indexMaiorValor, 1);

              valoresDaColuna.splice(indexMaiorValor, 1);
            }

            if (criterio === 'descrescente') {
              listaOrdenada.reverse();
            }

            _classPrivateFieldSet(this, _negociacoes, listaOrdenada);
          }
        }]);

        return ListaNegociacoes;
      }());

      _export("ListaNegociacoes", ListaNegociacoes);
    }
  };
});
//# sourceMappingURL=ListaNegociacoes.js.map