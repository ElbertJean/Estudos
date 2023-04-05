console.log('Seja bem vindo');
console.log('Exercício 6 - Diuvisão sem o operador divisor \n')

console.log('Vamos calcular uma divisão?')
const a = prompt('insira o dividendo?');
let dividendo = Number(a);
const b = prompt('insira o divisor?');
let divisor = Number(b);
let resultado = 0;

while (dividendo >= divisor) {
  dividendo = dividendo - divisor;
  resultado++;
}

console.log(`O resultado da divisão é ${resultado} e o resto é ${dividendo}`);