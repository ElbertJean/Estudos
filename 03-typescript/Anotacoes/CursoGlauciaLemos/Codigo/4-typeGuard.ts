// -----------------------------------------------------
// Exemplo 1 - Type Guards: typeof
// -----------------------------------------------------

export {};

type Alfanumerico = string | number

function exibirTipo (a: Alfanumerico, b: Alfanumerico) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b
    } else if (typeof a === 'string' && typeof b === 'string') {
        return a.toString() + b.toString()
    } else {
        throw new Error(`Por favor, insira ambos tipos iguais, ou string ou number`)
    }
}

console.log(exibirTipo(5, 10))
console.log(exibirTipo('Elbert', 'Jean'))
console.log(exibirTipo('Elbert', 10))


// -----------------------------------------------------
// Exemplo 2 - Type Guards: instanceof
// -----------------------------------------------------

class Carro {
    nome: string
    marca: string

    constructor (nome: string, marca: string) {
        this.nome = nome
        this.marca = marca
    }
}

class Moto {
    nome: string
    ano: string

    constructor (nome: string, ano: string) {
        this.nome = nome
        this.ano = ano
    }
}

function detalharVeiculo (veiculo: Carro | Moto) {
    if (veiculo instanceof Carro) {
        return `O veículo ${veiculo.nome} é um carro da marca ${veiculo.marca}`
    } else if (veiculo instanceof Moto) {
        return `O veículo ${veiculo.nome} é uma moto do ano ${veiculo.ano}`
    }
}

const carro = new Carro('Gol', 'Volkswagen')
console.log(detalharVeiculo(carro))

const moto = new Moto('Honda', '2010')
console.log(detalharVeiculo(moto))


// -----------------------------------------------------
// Exemplo 3 - Type Guards: in
// -----------------------------------------------------

interface Animal {
    grupo: string
}

class Peixe implements Animal {
    grupo: string
    corPeixe: string;
    
    constructor (grupo: string, corPeixe: string) {
        this.grupo = grupo
        this.corPeixe = corPeixe
    }
}

class Passaro implements Animal {
    grupo: string
    corPassaro: string;
    
    constructor (grupo: string, corPassaro: string) {
        this.grupo = grupo
        this.corPassaro = corPassaro
    } 
}

function nadar(grupo: string) {
    console.log(`O ${grupo} está nadando`)
}

function voar(grupo: string) {
    console.log(`O ${grupo} está voando`)
}

function mover(animal: Animal) {
    if ('corPeixe' in animal) {
        nadar(animal.grupo)
    } else if ('corPassaro' in animal) {
        voar(animal.grupo)
    }
}

const peixe = new Peixe('Tuba', 'Amarelo');
const passaro = new Passaro('Jubileu', 'Verde');

mover(peixe);
mover(passaro);