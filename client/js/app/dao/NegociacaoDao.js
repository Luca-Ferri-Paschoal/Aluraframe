"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _connectoin = /*#__PURE__*/new WeakMap();

var _store = /*#__PURE__*/new WeakMap();

var NegociacaoDao = /*#__PURE__*/function () {
  function NegociacaoDao(connection) {
    _classCallCheck(this, NegociacaoDao);

    _classPrivateFieldInitSpec(this, _connectoin, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _store, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _connectoin, connection);

    _classPrivateFieldSet(this, _store, 'negociacoes');

    ;
  }

  _createClass(NegociacaoDao, [{
    key: "adiciona",
    value: function adiciona(negociacao) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        var request = _classPrivateFieldGet(_this, _connectoin).transaction([_classPrivateFieldGet(_this, _store)], 'readwrite').objectStore(_classPrivateFieldGet(_this, _store)).add(negociacao.atributos);

        request.onsuccess = function (event) {
          resolve('Negociação adcionada com sucesso.');
        };

        request.onerror = function (event) {
          console.log(event.target.error);
          reject('Não foi possível adicionar a negociação.');
        };
      });
    }
  }, {
    key: "listaTodos",
    value: function listaTodos() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        var cursor = _classPrivateFieldGet(_this2, _connectoin).transaction([_classPrivateFieldGet(_this2, _store)], 'readwrite').objectStore(_classPrivateFieldGet(_this2, _store)).openCursor();

        var listaNegociacoes = [];

        cursor.onsuccess = function (event) {
          var atual = event.target.result;

          if (atual !== null) {
            var dado = atual.value;
            listaNegociacoes.push(new Negociacao(dado.data, dado.quantidade, dado.valor));
            atual.continue();
          } else {
            resolve(listaNegociacoes);
          }
        };

        cursor.onerror = function (event) {
          console.log(event.target.error);
          reject('Não foi possível listar as negociações.');
        };
      });
    }
  }, {
    key: "apagaTodos",
    value: function apagaTodos() {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        var request = _classPrivateFieldGet(_this3, _connectoin).transaction([_classPrivateFieldGet(_this3, _store)], 'readwrite').objectStore(_classPrivateFieldGet(_this3, _store)).clear();

        request.onsuccess = function (event) {
          resolve('Negociações apagadas com sucesso.');
        };

        request.onerror = function (event) {
          console.log(event.target.error);
          reject('Não foi possível apagar as negociações');
        };
      });
    }
  }]);

  return NegociacaoDao;
}();
//# sourceMappingURL=NegociacaoDao.js.map