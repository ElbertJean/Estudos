// -----------------------------------------------------
// Exemplo 1 - Intersection e Union
// -----------------------------------------------------

interface IEndereco {
    rua: string;
    numero: number;
    bairro: string;
}

interface IPessoa {
    nome: string;
    sobrenome: string;
    idade: number;
}

type IEnderecoPessoaOr = IEndereco | IPessoa;
type IEnderecoPessoaAnd = IEndereco & IPessoa;

const juquinha: IEnderecoPessoaOr = {
    nome: 'Elbert',
    sobrenome: 'Jean',
    idade: 27,
}

const mariazinha: IEnderecoPessoaAnd = {
    nome: 'Maria',
    sobrenome: 'Zinha',
    idade: 27,
    rua: 'Rua Principal',
    numero: 123,
    bairro: 'Bairro Principal',
}

console.log(juquinha)
console.log(mariazinha)
