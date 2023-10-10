export class Funcionarios {
    public nome: string;
    public idade: number;
    public setor: string;
    protected salario: number;

    constructor (nome: string, idade: number, setor: string, salario:number) {
        this.nome = nome;
        this.idade = idade;
        this.setor = setor;
        this.salario = salario;
    }

    getFuncionario() {
        console.log(
            `O funcionário ${this.nome}, tem ${this.idade} e trabalha no setor ${this.setor}`
        );
    }

    getSalario () {
        console.log (`O salário do ${this.nome} é ${this.salario} reais`);
    } 

    getAumentoSalario () {
        this.salario *= 1.10
        console.log (`Você recebeu um aumento de 10%, agora o seu salário é ${this.salario}`)
    }

    setSalarioFuncionario(salario: number) {
        if (salario < 0) {
            console.log `Erro! Insira um valor válido`
        } else {
            this.salario = salario;
            console. log (`O salário do ${this.nome} foi alterado para ${this.salario} reais`);
        }
    }
}

