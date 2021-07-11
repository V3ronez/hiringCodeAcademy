//boolean
const contaPaga: boolean = true;

//number
const idade: number = 22;
const avaliacao: number = 4.5;

//string
const nome: string = 'V3ronez';

const idades: number[] = [23, 45, 68];
const idades2: Array<number> = [10, 30.0, 23];

//tuple
let jogadores: [string, string, string];
jogadores = ['vitor', 'henrique', 'silva']

//enum
enum statusAprovacao {
    Aprovado = '001',
    Pendente = '002',
    Rejeitado = '003'
}

const statusDaAprovacao: statusAprovacao = statusAprovacao.Aprovado;

//any
const returnApi: any[] = [123, 'Henrique', false]
const returnApi2: any = {
    // ..........
};

//void
function printarNaTela(msg: string): void {
    console.log(msg);

}

//Null e Underfined
const u: undefined = undefined;
const n: null = null;

//object
function criar(objecto: object) {
    //....
}

// criar('V3');
// criar({
//     propriedade:1;
// })

//never
function loopInfinito(): never {
    while (true) { }
}

function erro(msg: string): never {
    throw new Error(msg);

}

//union types
function exibirNota(nota: number | string) {
    console.log(`A nota é ${nota}`)
}

exibirNota('10');


//alias
type Funcionario = {
    nome: string,
    sobrenome: string,
    dataNascimento: Date;
}


// type Funcionarios = string[];
// type Funcionarios = Funcionario[];

const funcionarios: Funcionario[] = [{
    nome: 'Henrique',
    sobrenome: 'Veronez',
    dataNascimento: new Date()
}, {
    nome: 'Anne',
    sobrenome: 'Lise',
    dataNascimento: new Date()
}];

function tratarFuncionarios(funcionarios: Funcionario[]) {
    for (let funcionario of funcionarios) {
        console.log(`Nome do funcionário: ${funcionario.nome}`)
    }
}


// type: Assertion

const minhaIdade: any = 23;
(minhaIdade as number).toString();

const input = document.getElementById('numero1') as HTMLInputElement;
console.log(input.value);