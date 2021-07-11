class Data {
    dia: number;
    private mes: number;
    ano: number;

    constructor(dia: number, mes: number, ano: number = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}

const data = new Data(1, 2, 2000);
console.log(data.ano);
// console.log(data.mes); //erro

const data2 = new Data(1, 2);
