"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var ConnectionFactory, _stores, _version, _dbName, _connection, _metodoClose;

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

  function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) {
    _classCheckPrivateStaticAccess(receiver, classConstructor);

    _classCheckPrivateStaticFieldDescriptor(descriptor, "set");

    _classApplyDescriptorSet(receiver, descriptor, value);

    return value;
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

  function _classStaticPrivateMethodGet(receiver, classConstructor, method) {
    _classCheckPrivateStaticAccess(receiver, classConstructor);

    return method;
  }

  function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) {
    _classCheckPrivateStaticAccess(receiver, classConstructor);

    _classCheckPrivateStaticFieldDescriptor(descriptor, "get");

    return _classApplyDescriptorGet(receiver, descriptor);
  }

  function _classCheckPrivateStaticFieldDescriptor(descriptor, action) {
    if (descriptor === undefined) {
      throw new TypeError("attempted to " + action + " private static field before its declaration");
    }
  }

  function _classCheckPrivateStaticAccess(receiver, classConstructor) {
    if (receiver !== classConstructor) {
      throw new TypeError("Private static access of wrong provenance");
    }
  }

  function _classApplyDescriptorGet(receiver, descriptor) {
    if (descriptor.get) {
      return descriptor.get.call(receiver);
    }

    return descriptor.value;
  }

  function _createStore(connection) {
    _classStaticPrivateFieldSpecGet(this, ConnectionFactory, _stores).forEach(function (store) {
      if (connection.objectStoreNames.contains(store)) {
        connection.deleteObjectStore(store);
      }

      connection.createObjectStore(store, {
        autoIncrement: true
      });
    });
  }

  return {
    setters: [],
    execute: function () {
      _export("ConnectionFactory", ConnectionFactory = function () {
        function ConnectionFactory() {
          _classCallCheck(this, ConnectionFactory);

          throw new Error('Não é possível criar instâncias de ConnectionFactory.');
        }

        _createClass(ConnectionFactory, null, [{
          key: "getConnection",
          value: function getConnection() {
            var _this = this;

            return new Promise(function (resolve, reject) {
              var openRequest = window.indexedDB.open(_classStaticPrivateFieldSpecGet(_this, ConnectionFactory, _dbName), _classStaticPrivateFieldSpecGet(_this, ConnectionFactory, _version));

              openRequest.onupgradeneeded = function (event) {
                _classStaticPrivateMethodGet(ConnectionFactory, ConnectionFactory, _createStore).call(ConnectionFactory, event.target.result);
              };

              openRequest.onsuccess = function (event) {
                if (_classStaticPrivateFieldSpecGet(_this, ConnectionFactory, _connection) === null) {
                  _classStaticPrivateFieldSpecSet(_this, ConnectionFactory, _connection, event.target.result);

                  _classStaticPrivateFieldSpecSet(_this, ConnectionFactory, _metodoClose, _classStaticPrivateFieldSpecGet(_this, ConnectionFactory, _connection).close.bind(_classStaticPrivateFieldSpecGet(_this, ConnectionFactory, _connection)));

                  _classStaticPrivateFieldSpecGet(_this, ConnectionFactory, _connection).close = function () {
                    throw new Error('Você não pode fechar diretamente uma conexão.');
                  };
                }

                resolve(_classStaticPrivateFieldSpecGet(_this, ConnectionFactory, _connection));
              };

              openRequest.onerror = function (event) {
                console.log(event.target.error);
                reject(event.target.error.name);
              };
            });
          }
        }, {
          key: "closeConnection",
          value: function closeConnection() {
            if (_classStaticPrivateFieldSpecGet(this, ConnectionFactory, _connection) !== null) {
              _classStaticPrivateFieldSpecGet(this, ConnectionFactory, _metodoClose).call(this); //Sem usar o bind, você pode fazer o seguite:
              //Reflect.apply(close, this.#connection, []);


              _classStaticPrivateFieldSpecSet(this, ConnectionFactory, _connection, null);
            }
          }
        }]);

        return ConnectionFactory;
      }());

      _export("ConnectionFactory", ConnectionFactory);

      _stores = {
        writable: true,
        value: ['negociacoes']
      };
      _version = {
        writable: true,
        value: 5
      };
      _dbName = {
        writable: true,
        value: 'aluraframe'
      };
      _connection = {
        writable: true,
        value: null
      };
      _metodoClose = {
        writable: true,
        value: null
      };
    }
  };
});
//# sourceMappingURL=ConnectionFactory.js.map