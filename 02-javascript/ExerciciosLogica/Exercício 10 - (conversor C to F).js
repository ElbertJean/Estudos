console.log('Sejá bem vindo');
console.log('Exercício 10 - Conversor de Celsius para Fahrenheit \n');

const a = prompt('Insira a temperatura em Graus Celsius');
const temperatura = Number(a);

if (isNaN(temperatura)) {
  console.log('Por favor, insira uma temperatura válida')
} else {
  const resultado = temperatura * 1.8 + 32;
  console.log(`${temperatura}°C é o mesmo que ${resultado}°F`);
}

