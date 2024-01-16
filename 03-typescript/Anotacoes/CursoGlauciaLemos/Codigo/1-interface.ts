// -----------------------------------------------------
// Exemplo 1 - Interface Simples
// -----------------------------------------------------

interface Pessoa {
    nome: string;
    sobrenome: string;
    idade: number;
}

function exibirNome(pessoa: Pessoa) {
    return `
        Nome: ${pessoa.nome},
        Sobrenome: ${pessoa.sobrenome},
        Idade: ${pessoa.idade}
    `;
}

const elbert = {
    nome: 'Elbert',
    sobrenome: 'Jean',
    idade: 27,
}

console.log(exibirNome(elbert))


// -----------------------------------------------------
// Exemplo 2 - Interface com Propriedade opcional
// -----------------------------------------------------

interface Livro {
    titulo: string;
    autor: string;
    paginas?: number;
}

const livro: Livro = {
    titulo: 'O Hobbit',
    autor: 'J. R. R. Tolkien',
}

console.log(livro.autor)


// -----------------------------------------------------
// Exemplo 3 - Interface com Propriedade de somente leitura e opcionais
// -----------------------------------------------------

interface Carro {
    readonly modelo: string;
    ano: number;
    valor?: number;
}

const carro: Carro = {
    modelo: 'X5',
    ano: 2020
}

// carro.modelo = 'X6'       <---- Vai gerar um erro, porque a propriedade é de apenas leitura.

console.log(carro)


// -----------------------------------------------------
// Exemplo 4 - Interface com implements Class
// -----------------------------------------------------

interface IAnimal {
    nome: string;
    idade: number;
    estaVivo: boolean;
    comer(comida: string): void;
}

class Gato implements IAnimal {
    nome: string;
    idade: number;
    estaVivo: boolean;

    constructor (nome: string, idade: number, estaVivo: boolean) {
        this.nome = nome
        this.idade = idade
        this.estaVivo = estaVivo
    }

    comer(comida: string): void {
        console.log(`O gato ${this.nome} está comendo ${comida}`)
    }
}

const gato = new Gato('Bruce', 5, true);
gato.comer('ração');
console.log(gato)


// -----------------------------------------------------
// Exemplo 5 - Diferença de Type vs Interface
// -----------------------------------------------------

interface Pessoa2 {
    nome: string;
    sobrenome: string;
    idade: number;
}

type Pessoa3 = {
    nome: string;
    sobrenome: string;
    idade: number;
}
