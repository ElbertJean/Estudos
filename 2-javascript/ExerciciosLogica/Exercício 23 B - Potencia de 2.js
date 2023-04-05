console.log('Seja bem vindo');
console.log('Exercício 23B - Descobrindo a potencia de 2 \n')

console.log('Vamos descobrir o X resultado da potência de 2?');
const fibonacci = Number(prompt ('Insira o expoente para descobrir o resultado'));
let resultado = 1;

for (let i = 0; i < fibonacci; i++) {
  resultado += resultado;
}

console.log(resultado);


//0 1 1 2 3 5 8 13 21 34 55