"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var _data, _quantidade, _valor, _volume, Negociacao;

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

  function _classPrivateFieldInitSpec(obj, privateMap, value) {
    _checkPrivateRedeclaration(obj, privateMap);

    privateMap.set(obj, value);
  }

  function _checkPrivateRedeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
      throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
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

  return {
    setters: [],
    execute: function () {
      _data = new WeakMap();
      _quantidade = new WeakMap();
      _valor = new WeakMap();
      _volume = new WeakMap();

      _export("Negociacao", Negociacao = function () {
        function Negociacao(data, quantidade, valor) {
          _classCallCheck(this, Negociacao);

          _classPrivateFieldInitSpec(this, _data, {
            writable: true,
            value: void 0
          });

          _classPrivateFieldInitSpec(this, _quantidade, {
            writable: true,
            value: void 0
          });

          _classPrivateFieldInitSpec(this, _valor, {
            writable: true,
            value: void 0
          });

          _classPrivateFieldInitSpec(this, _volume, {
            writable: true,
            value: void 0
          });

          _classPrivateFieldSet(this, _data, new Date(data.getTime()));

          _classPrivateFieldSet(this, _quantidade, quantidade);

          _classPrivateFieldSet(this, _valor, valor);

          _classPrivateFieldSet(this, _volume, quantidade * valor);

          Object.freeze(this);
        }

        _createClass(Negociacao, [{
          key: "data",
          get: function get() {
            return new Date(_classPrivateFieldGet(this, _data).getTime());
          }
        }, {
          key: "quantidade",
          get: function get() {
            return _classPrivateFieldGet(this, _quantidade);
          }
        }, {
          key: "valor",
          get: function get() {
            return _classPrivateFieldGet(this, _valor);
          }
        }, {
          key: "volume",
          get: function get() {
            return _classPrivateFieldGet(this, _volume);
          }
        }, {
          key: "isEquals",
          value: function isEquals(negociacaoExistente) {
            return JSON.stringify(this) === JSON.stringify(negociacaoExistente);
          }
        }, {
          key: "atributos",
          get: function get() {
            return {
              data: this.data,
              quantidade: this.quantidade,
              valor: this.valor
            };
          }
        }]);

        return Negociacao;
      }());

      _export("Negociacao", Negociacao);
    }
  };
});
//# sourceMappingURL=Negociacao.js.map