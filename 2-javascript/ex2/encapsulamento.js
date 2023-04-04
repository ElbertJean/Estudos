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

var elbert = new Cliente("Elbert", 26, "São José dos Campos");
console.log(elbert.apresentar());
elbert.nome= "Jean";
elbert.idade = 14;
elbert.cidade = "Jacareí"
console.log(elbert.apresentar());