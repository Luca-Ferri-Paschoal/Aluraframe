"use strict";

System.register(["./controllers/NegociacaoController.js"], function (_export, _context) {
  "use strict";

  var NegociacaoController, negociacaoController;
  return {
    setters: [function (_controllersNegociacaoControllerJs) {
      NegociacaoController = _controllersNegociacaoControllerJs.NegociacaoController;
    }],
    execute: function () {
      negociacaoController = new NegociacaoController();
      document.querySelector('.form').onsubmit = negociacaoController.adiciona.bind(negociacaoController);
      document.querySelector('button[type=button]').onclick = negociacaoController.apagaLista.bind(negociacaoController);
    }
  };
});
//# sourceMappingURL=boot.js.map