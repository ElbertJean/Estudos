// -----------------------------------------------------
// Exemplo 1 - Interface com extends
// -----------------------------------------------------

interface Animal {
    nome: string;
    idade: number;
    porte: string;
}

interface Cachorro extends Animal {
    raca: string;
}

const cachorro: Cachorro = {
    nome: 'Rex',
    idade: 5,
    porte: 'Pequeno',
    raca: 'Dalmata'
}

console.log(cachorro)


// -----------------------------------------------------
// Exemplo 2 - Interface com multiplos extends
// -----------------------------------------------------

interface Animal2 {
    nome: string;
    idade: number;
    porte: string;
}

interface Gato2 {
    comeRato: boolean
} 

interface Cachorro2 extends Animal2, Gato2 {
    raca: string;
}

const animal2: Cachorro2 = {
    nome: 'Rex',
    idade: 5,
    porte: 'Pequeno',
    raca: 'Dalmata',
    comeRato: true,
}

console.log(animal2)


// -----------------------------------------------------
// Exemplo 3 - Interface com uso de Omit
// -----------------------------------------------------

interface Funcionario {
    id: number;
    nome: string;
    salario: number;
}

interface Desenvolvedor extends Omit<Funcionario, 'id'> {
    id: string
    linguagemProgramacao: string;
}

const desenvolvedor: Desenvolvedor = {
    nome: 'Elbert',
    salario: 2000,
    id: '123',
    linguagemProgramacao: 'Java',
}

console.log(desenvolvedor)