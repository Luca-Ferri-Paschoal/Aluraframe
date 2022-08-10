"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var _handleErrors, HTTPService;

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

  function _handleErrors2(resposta) {
    if (!resposta.ok) throw new Error(resposta.statusText);
    return resposta;
  }

  return {
    setters: [],
    execute: function () {
      _handleErrors = new WeakSet();

      _export("HTTPService", HTTPService = function () {
        function HTTPService() {
          _classCallCheck(this, HTTPService);

          _classPrivateMethodInitSpec(this, _handleErrors);
        }

        _createClass(HTTPService, [{
          key: "get",
          value: function get(url) {
            var _this = this;

            return fetch(url).then(function (resposta) {
              return _classPrivateMethodGet(_this, _handleErrors, _handleErrors2).call(_this, resposta);
            }).then(function (resposta) {
              return resposta.json();
            }); //A fecth API simplifica muito as coisas. Dá uma olhada no código usando XMLHttpRequest():

            /*return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                      xhr.open('GET', url);
                      xhr.onreadystatechange = () => { 
                          if(xhr.readyState === 4) {
                        if(xhr.status === 200) {
                            resolve(JSON.parse(xhr.responseText));
                        } else {
                            reject(xhr.responseText);
                        }
                    }
                      }
                      xhr.send();
            });*/
          }
        }, {
          key: "post",
          value: function post(url, dado) {
            var _this2 = this;

            return fetch(url, {
              headers: {
                'Content-type': 'application/json'
              },
              method: 'post',
              body: JSON.stringify(dado)
            }).then(function (resposta) {
              return _classPrivateMethodGet(_this2, _handleErrors, _handleErrors2).call(_this2, resposta);
            }); //.then(resposta => this.#handleErrors(resposta));

            /*return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                      xhr.open('Post', url, true);
                
                xhr.setRequestHeader('Content-Type', 'application/JSON');
                  xhr.onreadystatechange = () => {
                      if(xhr.readyState === 4) {
                        if(xhr.status === 200) {
                            resolve(JSON.parse(xhr.responseText));
                        } else {
                            reject(xhr.responseText);
                        }
                    }
                  }
                  xhr.send(JSON.stringify(dado));
            });*/
          }
        }]);

        return HTTPService;
      }());

      _export("HTTPService", HTTPService);
    }
  };
});
//# sourceMappingURL=HTTPService.js.map