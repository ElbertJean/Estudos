console.log('Seja bem vindo');
console.log('Exercício 22 - Calculadora MDC \n')

console.log('Vamos calcular o MDC? :) \n')
const a = prompt('Qual o dividendo?');
const b = prompt('Qual o divisor?');
let valorA = Number(a);
let valorB = Number(b);
let resto = Number(1);

while (resto != 0) {
  resto = valorA % valorB;
  valorA = valorB;
  valorB = resto;
  console.log(valorA, valorB, resto)
}

console.log(`O MDC é ${valorA}`);