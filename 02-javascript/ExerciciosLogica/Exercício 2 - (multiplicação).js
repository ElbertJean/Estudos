console.log('Sejá bem vindo');
console.log('Exercício 2 - Multiplicação \n');

console.log('Insira dois números para serem multiplicados');
const a = prompt('Qual o primeiro número?');
const b = prompt('Qual o segundo número?');
const primeiroValor = Number(a);
const segundoValor = Number(b);

if (isNaN(primeiroValor)  || isNaN(segundoValor)) {
  console.log('Por favor, insira um número válido')
} else {
  const resultado = primeiroValor * segundoValor;
  console.log(resultado);
}


