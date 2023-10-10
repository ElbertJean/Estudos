class PessoaFisica {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.Nome = nome;
        this.Sobrenome = sobrenome;
    }
}
class ContaCorrente {
    adicionarCorrentista(pessoa) {
        console.log(pessoa.Nome);
    }
}
let cliente = new PessoaFisica("Elbert", "Jean");
let conta = new ContaCorrente();
conta.adicionarCorrentista(cliente);