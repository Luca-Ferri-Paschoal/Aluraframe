"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var DateHelper = /*#__PURE__*/function () {
  function DateHelper() {
    _classCallCheck(this, DateHelper);

    throw new Error('Essa classe não pode ser instanciada.');
  }

  _createClass(DateHelper, null, [{
    key: "textoParaData",
    value: function textoParaData(texto) {
      if (!/^\d{4}([-,/.])\d{1,2}\1\d{1,2}$/.test(texto)) {
        throw new Error('A data não esta no formato aaaa-mm-dd');
      }

      return new Date(texto.replace(/-/g, ','));
    }
  }, {
    key: "dataParaTexto",
    value: function dataParaTexto(data) {
      return "".concat(data.getDate(), "/").concat(data.getMonth() + 1, "/").concat(data.getFullYear());
    }
  }]);

  return DateHelper;
}();
//# sourceMappingURL=DateHelper.js.map