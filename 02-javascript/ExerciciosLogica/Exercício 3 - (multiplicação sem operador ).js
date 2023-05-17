console.log('Seja bem vindo');
console.log('Exercício 3 - Multiplicação sem operador \n');

console.log('Vamos calcular uma multiplicação de dois valores?\n')
const a = prompt('Insira o primeiro valor');
const primeiroValor = Number(a);
const b = prompt('Insira o segundo valor');
const segundoValor = Number(b);
let resultado = 0;

if(isNaN(primeiroValor) || isNaN(segundoValor)) {
  console.log('Por favor, insira um número válido')
} else {
  for (let i = 0; i < segundoValor; i++){
    resultado += primeiroValor;
  }
}
 console.log(`O resultado da multiplicação é ${resultado}`);