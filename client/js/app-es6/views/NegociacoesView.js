import { View } from './View.js';
import { DateHelper } from './../helpers/DateHelper.js';

export class NegociacoesView extends View {

    // constructor(elemento) {
    //     super(elemento);
    // }

    _template(model) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th onclick="negociacaoController.ordenaLista('data')">DATA</th>
                    <th onclick="negociacaoController.ordenaLista('quantidade')">QUANTIDADE</th>
                    <th onclick="negociacaoController.ordenaLista('valor')">VALOR</th>
                    <th onclick="negociacaoController.ordenaLista('volume')">VOLUME</th>
                </tr>
            </thead>

            <tbody>
                ${model.negociacoes.map(item => `
                    <tr>
                        <td onclick="negociacaoController.ordenaLista('data')">${DateHelper.dataParaTexto(item.data)}</td>
                        <td onclick="negociacaoController.ordenaLista('quantidade')">${item.quantidade}</td>
                        <td onclick="negociacaoController.ordenaLista('valor')">${item.valor}</td>
                        <td onclick="negociacaoController.ordenaLista('volume')">${item.volume}</td>
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
