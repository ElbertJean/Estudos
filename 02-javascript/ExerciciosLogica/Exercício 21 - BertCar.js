console.log('Seja bem vindo');
console.log('Exercício 21 - BertCar \n')

console.log('Afim de financiar um carro? Vamos calcular o preço das parcelas!');
const valorCarro = Number(prompt ('Qual o valor do carro? Exemplo: 65000'));
const valorEntrada = Number(prompt ('Qual o valor que deseja dar de entrada? Exemplo: 15000'));
const quantidadeParcelas = Number(prompt ('Deseja financiar em quantas vezes? Exemplo: 24'));

if (isNaN(valorCarro) || isNaN(valorEntrada) || isNaN(quantidadeParcelas)){
  console.log('Por favor, insira um número válido')
} else if (valorCarro < 0 || valorEntrada < 0 || quantidadeParcelas < 0) {
  console.log('Por favor, insira um valor válido')
} else {
  const valorPosEntrada = valorCarro - valorEntrada;
  const valorParcelas = valorPosEntrada / quantidadeParcelas;
  const valorParcelasJuros = valorParcelas + (valorParcelas * 0.20);

  console.log(`\nValor Total do carro : R$ ${valorCarro}`);
  console.log(`Valor da entrada : R$ ${valorEntrada}`);
  console.log(`Valor restante pós entrada : R$ ${valorPosEntrada}`);
  console.log('Valor do juros por mês : 20%')
  console.log(`O financiamento ficou em ${quantidadeParcelas} x R$ ${valorParcelasJuros.toFixed(2)}`)
}
