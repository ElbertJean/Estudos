console.log('Sejá bem vindo');
console.log('Exercício 11 - Calculadora IMC \n');

const a = prompt('Qual o seu peso? Ex: 67.5');
const b = prompt('Qual a sua altura Ex: 1.75');
const peso = Number(a);
const altura = Number(b);
const resultado = peso / (altura * altura);

if (isNaN(peso) || peso < 0 || peso > 300) {
  console.log('Por favor, insira um peso válido')
} else if (isNaN(altura) || altura < 1 || altura > 3){
  console.log('Por favor, insira uma altura válida')
} else if (resultado < 18.5) {
  console.log('\n');
  console.log(`Seu IMC é ${resultado.toFixed(2)}`)
  console.log('Você está magro')
} else if (resultado >= 18.5 && resultado <=24.9){
  console.log('\n');
  console.log(`Seu IMC é ${resultado.toFixed(2)}`)
  console.log('Você está com o peso normal')
} else if (resultado >= 25 && resultado <=29.9){
  console.log('\n');
  console.log(`Seu IMC é ${resultado.toFixed(2)}`)
  console.log('Você está sobrepeso')
} else if (resultado >= 30 && resultado <=39.9){
  console.log('\n');
  console.log(`Seu IMC é ${resultado.toFixed(2)}`)
  console.log('Você está obeso')
} else {
  console.log('\n');
  console.log(`Seu IMC é ${resultado.toFixed(2)}`)
  console.log('Você está na obesidade grave')
}

