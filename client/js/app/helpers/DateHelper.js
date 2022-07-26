class DateHelper {

    constructor() {
        throw new Error('Essa classe não pode ser instanciada.');
    }

    static textoParaData(texto) {
        if(!/^\d{4}([-,/.])\d{1,2}\1\d{1,2}$/.test(texto)) {
            throw new Error('A data não esta no formato aaaa-mm-dd');
        }
        return new Date(texto.replace(/-/g, ','));
    }

    static dataParaTexto(data) {
        return `${data.getDate()}/${(data.getMonth() + 1)}/${data.getFullYear()}`;
    }
}
