"use strict";

System.register(["./HTTPService.js", "./ConnectionFactory.js", "./../dao/NegociacaoDao.js", "./../models/Negociacao.js"], function (_export, _context) {
  "use strict";

  var HTTPService, ConnectionFactory, NegociacaoDao, Negociacao, _http, _transformaObjetosEmNegociacoes, NegociacaoService;

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

  function _transformaObjetosEmNegociacoes2(arrayDeObjeto) {
    return arrayDeObjeto.map(function (objeto) {
      return new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor);
    });
  }

  return {
    setters: [function (_HTTPServiceJs) {
      HTTPService = _HTTPServiceJs.HTTPService;
    }, function (_ConnectionFactoryJs) {
      ConnectionFactory = _ConnectionFactoryJs.ConnectionFactory;
    }, function (_daoNegociacaoDaoJs) {
      NegociacaoDao = _daoNegociacaoDaoJs.NegociacaoDao;
    }, function (_modelsNegociacaoJs) {
      Negociacao = _modelsNegociacaoJs.Negociacao;
    }],
    execute: function () {
      _http = new WeakMap();
      _transformaObjetosEmNegociacoes = new WeakSet();

      _export("NegociacaoService", NegociacaoService = function () {
        function NegociacaoService() {
          _classCallCheck(this, NegociacaoService);

          _classPrivateMethodInitSpec(this, _transformaObjetosEmNegociacoes);

          _classPrivateFieldInitSpec(this, _http, {
            writable: true,
            value: void 0
          });

          _classPrivateFieldSet(this, _http, new HTTPService());
        }

        _createClass(NegociacaoService, [{
          key: "obterNegociacoesDaSemana",
          value: function obterNegociacoesDaSemana(semanaEscolida) {
            var _this = this;

            return _classPrivateFieldGet(this, _http).get("negociacoes/".concat(semanaEscolida)).then(function (objetos) {
              return _classPrivateMethodGet(_this, _transformaObjetosEmNegociacoes, _transformaObjetosEmNegociacoes2).call(_this, objetos);
            }).catch(function (erro) {
              console.log(erro);
              throw new Error("N\xE3o foi poss\xEDvel obter as negocia\xE7\xF5es da semana ".concat(semanaEscolida, "."));
            });
          }
        }, {
          key: "obterNegociacoes",
          value: function obterNegociacoes() {
            return Promise.all([this.obterNegociacoesDaSemana('retrasada'), this.obterNegociacoesDaSemana('anterior'), this.obterNegociacoesDaSemana('atual')]).then(function (negociacoes) {
              return negociacoes.reduce(function (arrayAchatado, array) {
                return arrayAchatado.concat(array);
              }, []);
            });
          }
        }, {
          key: "cadastra",
          value: function cadastra(negociacao) {
            return ConnectionFactory.getConnection().then(function (connection) {
              return new NegociacaoDao(connection);
            }).then(function (dao) {
              return dao.adiciona(negociacao);
            }).then(function () {
              return 'Negociação adicionanda com sucesso';
            }).catch(function (erro) {
              console.log(erro);
              throw new Error('Não foi possível adicionar a negociação.');
            });
          }
        }, {
          key: "lista",
          value: function lista() {
            return ConnectionFactory.getConnection().then(function (connection) {
              return new NegociacaoDao(connection);
            }).then(function (dao) {
              return dao.listaTodos();
            }).catch(function (erro) {
              console.log(erro);
              throw new Error('Não foi possível obter as negociações.');
            });
          }
        }, {
          key: "apaga",
          value: function apaga() {
            return ConnectionFactory.getConnection().then(function (connection) {
              return new NegociacaoDao(connection);
            }).then(function (dao) {
              return dao.apagaTodos();
            }).then(function () {
              return 'Negociações apagadas com sucesso';
            }).catch(function (erro) {
              console.log(erro);
              throw new Error('Não foi possível apagar as negociações.');
            });
          }
        }, {
          key: "importa",
          value: function importa(listaAtual) {
            return this.obterNegociacoes().then(function (negociacoes) {
              return negociacoes.filter(function (negociacao) {
                return !listaAtual.some(function (negociacaoExistente) {
                  return negociacao.isEquals(negociacaoExistente);
                });
              });
            }).catch(function (erro) {
              console.log(erro);
              throw new Error('Não foi possível buscar negociações para importar.');
            });
          }
        }]);

        return NegociacaoService;
      }());

      _export("NegociacaoService", NegociacaoService);
    }
  };
});
//# sourceMappingURL=NegociacaoService.js.map