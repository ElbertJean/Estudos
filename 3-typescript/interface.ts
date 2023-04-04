interface Pessoa {
    Nome: string;
    Sobrenome: string;
}

class PessoaFisica implements Pessoa {
    Nome: string;
    Sobrenome: string;

    constructor(public nome: string, public sobrenome: string) {
        this.Nome = nome;
        this.Sobrenome = sobrenome;
    }
}

class ContaCorrente {
    adicionarCorrentista(pessoa: Pessoa){
        alert(pessoa.Nome)
    }
}

let cliente = new PessoaFisica ("Elbert", "Jean");
let conta = new ContaCorrente();
conta.adicionarCorrentista(cliente);