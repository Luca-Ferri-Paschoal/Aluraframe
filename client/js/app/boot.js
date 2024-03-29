"use strict";

System.register(["./controllers/NegociacaoController.js"], function (_export, _context) {
  "use strict";

  var currentInstance, negociacaoController;
  return {
    setters: [function (_controllersNegociacaoControllerJs) {
      currentInstance = _controllersNegociacaoControllerJs.currentInstance;
    }],
    execute: function () {
      negociacaoController = currentInstance();
      document.querySelector('.form').onsubmit = negociacaoController.adiciona.bind(negociacaoController);
      document.querySelector('button[type=button]').onclick = negociacaoController.apagaLista.bind(negociacaoController);
    }
  };
});
//# sourceMappingURL=boot.js.map