"use strict";

System.register(["./../models/Negociacao.js", "./../models/ListaNegociacoes.js", "./../models/Mensagem.js", "./../views/NegociacoesView.js", "./../views/MensagemView.js", "./../services/NegociacaoService.js", "./../helpers/DateHelper.js", "./../helpers/Bind.js"], function (_export, _context) {
  "use strict";

  var Negociacao, ListaNegociacoes, Mensagem, NegociacoesView, MensagemView, NegociacaoService, DateHelper, Bind, _inputData, _inputQuantidade, _inputValor, _listaNegociacoes, _mensagem, _colunaAnterior, _service, _init, _importaNegociacoes, _criaNegociacao, _limpaCampos, NegociacaoController;

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

  function _classPrivateMethodGet(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
      throw new TypeError("attempted to get private field on non-instance");
    }

    return fn;
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

  function _init2() {
    var _this3 = this;

    _classPrivateFieldGet(this, _service).lista().then(function (negociacoes) {
      return negociacoes.forEach(function (negociacao) {
        return _classPrivateFieldGet(_this3, _listaNegociacoes).adiciona(negociacao);
      });
    }).catch(function (erro) {
      console.log(erro);
      _classPrivateFieldGet(_this3, _mensagem).texto = erro;
    });

    setInterval(function () {
      _classPrivateMethodGet(_this3, _importaNegociacoes, _importaNegociacoes2).call(_this3);
    }, 3000);
  }

  function _importaNegociacoes2() {
    var _this4 = this;

    _classPrivateFieldGet(this, _service).importa(_classPrivateFieldGet(this, _listaNegociacoes).negociacoes).then(function (negociacoes) {
      return negociacoes.forEach(function (negociacao) {
        _classPrivateFieldGet(_this4, _listaNegociacoes).adiciona(negociacao);
      });
    }).catch(function (erro) {
      return _classPrivateFieldGet(_this4, _mensagem).texto = erro;
    });
  }

  function _criaNegociacao2() {
    return new Negociacao(DateHelper.textoParaData(_classPrivateFieldGet(this, _inputData).value), parseInt(_classPrivateFieldGet(this, _inputQuantidade).value), parseFloat(_classPrivateFieldGet(this, _inputValor).value));
  }

  function _limpaCampos2() {
    var zero = 0;
    _classPrivateFieldGet(this, _inputData).value = '';
    _classPrivateFieldGet(this, _inputQuantidade).value = 1;
    _classPrivateFieldGet(this, _inputValor).value = zero.toFixed(1);

    _classPrivateFieldGet(this, _inputData).focus();
  }

  return {
    setters: [function (_modelsNegociacaoJs) {
      Negociacao = _modelsNegociacaoJs.Negociacao;
    }, function (_modelsListaNegociacoesJs) {
      ListaNegociacoes = _modelsListaNegociacoesJs.ListaNegociacoes;
    }, function (_modelsMensagemJs) {
      Mensagem = _modelsMensagemJs.Mensagem;
    }, function (_viewsNegociacoesViewJs) {
      NegociacoesView = _viewsNegociacoesViewJs.NegociacoesView;
    }, function (_viewsMensagemViewJs) {
      MensagemView = _viewsMensagemViewJs.MensagemView;
    }, function (_servicesNegociacaoServiceJs) {
      NegociacaoService = _servicesNegociacaoServiceJs.NegociacaoService;
    }, function (_helpersDateHelperJs) {
      DateHelper = _helpersDateHelperJs.DateHelper;
    }, function (_helpersBindJs) {
      Bind = _helpersBindJs.Bind;
    }],
    execute: function () {
      _inputData = new WeakMap();
      _inputQuantidade = new WeakMap();
      _inputValor = new WeakMap();
      _listaNegociacoes = new WeakMap();
      _mensagem = new WeakMap();
      _colunaAnterior = new WeakMap();
      _service = new WeakMap();
      _init = new WeakSet();
      _importaNegociacoes = new WeakSet();
      _criaNegociacao = new WeakSet();
      _limpaCampos = new WeakSet();

      _export("NegociacaoController", NegociacaoController = function () {
        function NegociacaoController() {
          _classCallCheck(this, NegociacaoController);

          _classPrivateMethodInitSpec(this, _limpaCampos);

          _classPrivateMethodInitSpec(this, _criaNegociacao);

          _classPrivateMethodInitSpec(this, _importaNegociacoes);

          _classPrivateMethodInitSpec(this, _init);

          _classPrivateFieldInitSpec(this, _inputData, {
            writable: true,
            value: void 0
          });

          _classPrivateFieldInitSpec(this, _inputQuantidade, {
            writable: true,
            value: void 0
          });

          _classPrivateFieldInitSpec(this, _inputValor, {
            writable: true,
            value: void 0
          });

          _classPrivateFieldInitSpec(this, _listaNegociacoes, {
            writable: true,
            value: void 0
          });

          _classPrivateFieldInitSpec(this, _mensagem, {
            writable: true,
            value: void 0
          });

          _classPrivateFieldInitSpec(this, _colunaAnterior, {
            writable: true,
            value: void 0
          });

          _classPrivateFieldInitSpec(this, _service, {
            writable: true,
            value: void 0
          });

          var pega = document.querySelector.bind(document);

          _classPrivateFieldSet(this, _inputData, pega('#data'));

          _classPrivateFieldSet(this, _inputQuantidade, pega('#quantidade'));

          _classPrivateFieldSet(this, _inputValor, pega('#valor'));

          _classPrivateFieldSet(this, _listaNegociacoes, new Bind(new ListaNegociacoes(), new NegociacoesView(pega('#negociacoesView')), 'adiciona', 'esvazia', 'ordenaPor'));

          _classPrivateFieldSet(this, _mensagem, new Bind(new Mensagem(), new MensagemView(pega('#mensagemView')), 'texto'));

          _classPrivateFieldSet(this, _colunaAnterior, null);

          _classPrivateFieldSet(this, _service, new NegociacaoService());

          _classPrivateMethodGet(this, _init, _init2).call(this);
        }

        _createClass(NegociacaoController, [{
          key: "adiciona",
          value: function adiciona(event) {
            var _this = this;

            event.preventDefault();

            var negociacao = _classPrivateMethodGet(this, _criaNegociacao, _criaNegociacao2).call(this);

            _classPrivateFieldGet(this, _service).cadastra(negociacao).then(function (mensagem) {
              _classPrivateFieldGet(_this, _listaNegociacoes).adiciona(negociacao);

              _classPrivateFieldGet(_this, _mensagem).texto = mensagem;

              _classPrivateMethodGet(_this, _limpaCampos, _limpaCampos2).call(_this);
            }).catch(function (erro) {
              return _classPrivateFieldGet(_this, _mensagem).texto = erro;
            });
          }
        }, {
          key: "apagaLista",
          value: function apagaLista() {
            var _this2 = this;

            _classPrivateFieldGet(this, _service).apaga().then(function (mensagem) {
              _classPrivateFieldGet(_this2, _listaNegociacoes).esvazia();

              _classPrivateFieldGet(_this2, _mensagem).texto = mensagem;
            }).catch(function (erro) {
              return _classPrivateFieldGet(_this2, _mensagem).texto = erro;
            });
          }
        }, {
          key: "ordenaLista",
          value: function ordenaLista(coluna) {
            var criterio = null;

            if (_classPrivateFieldGet(this, _colunaAnterior) === coluna) {
              _classPrivateFieldSet(this, _colunaAnterior, null);

              criterio = 'descrescente';
            } else {
              _classPrivateFieldSet(this, _colunaAnterior, coluna);

              criterio = 'crescente';
            }

            _classPrivateFieldGet(this, _listaNegociacoes).ordenaPor(coluna, criterio);
          }
        }]);

        return NegociacaoController;
      }());

      _export("NegociacaoController", NegociacaoController);
    }
  };
});
//# sourceMappingURL=NegociacaoController.js.map