import { View } from './View.js';
import { DateHelper } from './../helpers/DateHelper.js';
import { currentInstance } from './../controllers/NegociacaoController.js';

export class NegociacoesView extends View {

    // constructor(elemento) {
    //     super(elemento);
    // }

    constructor(elemento) {
        super(elemento);

        elemento.addEventListener('click', function(event) {
            if (event.target.nodeName === 'TH') {
                currentInstance().ordenaLista(event.target.textContent.toLowerCase());
            }
        })
    }

    _template(model) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
                ${model.negociacoes.map(item => `
                    <tr>
                        <td>${DateHelper.dataParaTexto(item.data)}</td>
                        <td>${item.quantidade}</td>
                        <td>${item.valor}</td>
                        <td>${item.volume}</td>
                    </tr>
                `).join('')}
            </tbody>

            <tfoot>
                <td colspan="3"></td>
                <td>
                    ${model.volumeTotal}
                </td>
            </tfoot>
        </table>
        `;
    }

}
