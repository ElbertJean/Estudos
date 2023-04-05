console.log('Seja bem vindo');
console.log('Exercício 18 - BERT BURGUER \n');

console.log('Bem vindo ao Bert Burguer');
console.log('Sinta-se em casa!');
console.log('Taxa de atendimento: 10%\n');

const a = prompt ('Estão em quantas pessoas?');
const numeroPessoas = Number(a);

if(isNaN(numeroPessoas) || numeroPessoas <0) {
  console.log('Por favor, insira um número válido');
} else {
  const b = prompt ('Qual foi o total consumido? Ex: 360.54');
  const totalConsumo = Number(b);

  if (isNaN(totalConsumo) || totalConsumo <0 ) {
    console.log('Por favor, insira um número válido');
  } else {
    const totalTaxa = ( totalConsumo * 0.10 ) + totalConsumo;
    const totalUnitario = totalTaxa / numeroPessoas;

    console.log(`\nNÚMERO DE PESSOAS NA MESA: ${numeroPessoas}`);
    console.log(`TOTAL CONSUMIDO: R$ ${totalConsumo.toFixed(2)}`);
    console.log(`TOTAL DA CONTA COM TAXA DE ATENDIMENTO: R$ ${totalTaxa.toFixed(2)}`);
    console.log(`TOTAL PARA CADA CLIENTE (Dividido por ${numeroPessoas}) : R$ ${totalUnitario.toFixed(2)}`);
  }

  console.log('\nBERT BURGUER AGRADECE A PREFERÊNCIA!');
  console.log('VOLTE SEMPRE!');
}

