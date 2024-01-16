"use strict";
// string
let nome = 'João';
console.log(nome);
// number
let idade = 23;
console.log(idade);
// boolean
let possuiHobbies = true;
console.log(possuiHobbies);
// tipos explicitos
let minhaIdade;
minhaIdade = 23;
console.log(typeof minhaIdade);
// array
let hobbies = ["Cozinhar", "Praticar esportes"];
console.log(hobbies[0]);
// tuplas
let endereco = ["Av. Principal", 99, ""];
console.log(endereco);
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 10] = "Azul";
    Cor[Cor["Laranja"] = 11] = "Laranja";
    Cor[Cor["Amarelo"] = 12] = "Amarelo";
    Cor[Cor["Vermelho"] = 1000] = "Vermelho"; // 1000
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
// any
let carro = "SSD";
console.log(minhaCor);
// funcoes
function retornaMeuNome() {
    return nome;
}
console.log(retornaMeuNome());
// objetos
let pessoa = {
    nome: "João",
    idade: 23
};
console.log(pessoa.nome);
