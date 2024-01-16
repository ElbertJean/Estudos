// string
let nome: string = 'João';
console.log(nome)


// number
let idade: number = 23;
console.log(idade)


// boolean
let possuiHobbies: boolean = true;
console.log(possuiHobbies)


// tipos explicitos
let minhaIdade;
minhaIdade = 23;
console.log(typeof minhaIdade);


// array
let hobbies: any[] = ["Cozinhar", "Praticar esportes"];
console.log(hobbies[0]);


// tuplas
let endereco: [string, number, string] = ["Av. Principal", 99, ""];
console.log(endereco);


// enums
enum Cor {
    Cinza, // 0
    Verde = 100, // 100 
    Azul = 10, // 11
    Laranja,
    Amarelo,
    Vermelho = 1000 // 1000
}

let minhaCor: Cor = Cor.Verde;
console.log(minhaCor);

// any
let carro: any = "SSD";
console.log(minhaCor);


// funcoes
function retornaMeuNome(): string {
    return nome;
}

console.log(retornaMeuNome());


// objetos
let pessoa: {nome: string, idade: number} = {
    nome: "João",
    idade: 23
}

console.log(pessoa.nome); 