console.log('Seja bem vindo');
console.log('Exercício 19 - Gerador de números aleatórios \n')

console.log('Gerador de números aleatórios');
console.log('Quer jogar no bicho e não sabe em qual número apostar? Podemos te ajudar!');
console.log('\n1 - Centena');
console.log('2 - Milhar');
const escolha = prompt ('Escolha o tipo de jogo')

switch (escolha) {
  case '1':
  const b = prompt ('\nQuantos números aleatórios você deseja?')
    let numerosCentena = Number(b);

    if(isNaN(numerosCentena) || numerosCentena <0) {
      console.log('Por favor, insira um número válido');
    } else{
      for (let j = 0; j < numerosCentena; j++){
        const aleatorioCentena = Math.floor(Math.random() * (1000 - 100) + 100);
        console.log(aleatorioCentena);
      }
    }
  break;
  case '2':
    const a = prompt ('\nQuantos números aleatórios você deseja?')
    let numerosMilhar = Number(a);

    if(isNaN(numerosMilhar) || numerosMilhar <0) {
      console.log('Por favor, insira um número válido');
    } else{
      for (let i = 0; i < numerosMilhar; i++){
        const aleatorioMilhar = Math.floor(Math.random() * (10000 - 1000) + 1000);
        console.log(aleatorioMilhar);
      }
    }
  break;
  default:
  console.log('Opção inválida');
}

