console.log('Seja bem vindo');
console.log('Exercício 17 - Tabuada \n')

console.log('Vamos calcular a tabuada?');
const a = prompt ('Qual tabuada você deseja?')
const tabuada = Number(a);

if (isNaN(tabuada) || tabuada < 0) {
  console.log('Por favor, insira um número válido') 
} else {
  for (let i =0; i <=10; i++){
    const resultado = i * tabuada;
    console.log(`${tabuada} * ${i} = ${resultado}`)
  }
}