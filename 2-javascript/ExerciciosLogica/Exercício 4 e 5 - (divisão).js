console.log('Sejá bem vindo');
console.log('Exercício 4 - Divisão \n');

const a = prompt('Primeiro número : Dividendo');
const b = prompt('Segundo número : Divisor');
const primeiroValor = Number(a);
const segundoValor = Number(b);

if (isNaN(primeiroValor)  || isNaN(segundoValor)) {
  console.log('Por favor, insira um número válido')
} else if (primeiroValor < 0 || segundoValor < 0){
  console.log('Por favor, insira um número positivo para divisão');
} else {
  const resultado = (primeiroValor / segundoValor).toFixed(2);
  console.log(resultado);
}

