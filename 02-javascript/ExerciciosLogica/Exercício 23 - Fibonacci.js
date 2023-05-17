console.log('Seja bem vindo');
console.log('Exercício 23 - Descobrindo o fibonacci \n')

console.log('Vamos descobrir o X resultado do fibonacci?');
const fibonacci = Number(prompt ('Insira a posição para descobrir o resultado do fibonacci'));
let primeiro = 0;
let segundo = 1;
let resultado;

if(isNaN(fibonacci) || fibonacci < 0){
  console.log('Por favor, insira um número válido')
} else {
  if(fibonacci <=2){
    resultado = fibonacci -1;
  } else {
    for(let i = 3; i <= fibonacci; i++){
      resultado = primeiro + segundo;
      primeiro = segundo;
      segundo = resultado;
    }
    console.log(resultado);
  }
}
