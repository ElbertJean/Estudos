class Cliente {
    #nome;    // Para tornar um atributo privado, basta adicionar
    #idade;   //# antes do atributo.    
    #cidade;

    constructor (nome, idade, cidade){
        this.#nome = nome;
        this.#idade = idade;
        this.#cidade = cidade;
    }

    get nome () { return this.#nome } // pega as informações do atributo privado.

    get idade () { return this.#idade }

    get cidade () { return this.#cidade }

    set nome (nome) { this.#nome = nome } // permite fazer alterações no atributo privado.

    set idade (idade) { this.#idade = idade }

    set cidade (cidade) { this.#cidade = cidade }

    apresentar() {
        return `O meu nome é ${this.nome}, tenho ${this.idade} anos e sou de ${this.cidade}`;
    }
}

class Dono extends Cliente {     // pega a classe Cliente como pai, consome os atributos dela
        
}

var presidente = new Dono("Elbert", 26, "São José dos Campos");
console.log(presidente);
