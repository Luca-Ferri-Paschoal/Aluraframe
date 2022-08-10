import { NegociacaoController } from './controllers/NegociacaoController.js';

var negociacaoController = new NegociacaoController();

document.querySelector('.form').onsubmit = negociacaoController.adiciona.bind(negociacaoController);
document.querySelector('button[type=button]').onclick = negociacaoController.apagaLista.bind(negociacaoController);
