"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var DateHelper;

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

  return {
    setters: [],
    execute: function () {
      _export("DateHelper", DateHelper = function () {
        function DateHelper() {
          _classCallCheck(this, DateHelper);
        }

        _createClass(DateHelper, [{
          key: "dateToString",
          value: function dateToString(date) {
            /* faz algo */
          }
        }, {
          key: "stringToDate",
          value: function stringToDate(string) {
            /* faz algo */
          }
        }]);

        return DateHelper;
      }());

      _export("DateHelper", DateHelper);
    }
  };
});
//# sourceMappingURL=datex.js.map