console.log('Seja bem vindo');
console.log('Exercício 7 - Média final \n')

console.log('Calculadora de Média final');
console.log('Vamos calcular a sua média final e ver se você passou de ano ou não');
console.log('\nO peso das notas serão calculados da seguinte forma:')
console.log('Primeiro semestre - 0.2');
console.log('Segundo semestre - 0.2');
console.log('Terceiro semestre - 0.2');
console.log('Quarto semestre - 0.4\n');
const a = prompt ('\nNota do primeiro semestre')
const b = prompt ('Nota do segundo semestre')
const c = prompt ('Nota do terceiro semestre')
const d = prompt ('Nota do quarto semestre')
const primeiraNota = Number(a);
const segundaNota = Number(b);
const terceiraNota = Number(c);
const quartaNota = Number(d);

if(isNaN(primeiraNota) || isNaN(segundaNota) || isNaN(terceiraNota) || isNaN(quartaNota)) {
  console.log('Por favor, insira um número válido');
} else if (primeiraNota < 0 || segundaNota < 0 || terceiraNota < 0 || quartaNota < 0 ) {
  console.log('Por favor, insira uma nota válida');
} else if (primeiraNota > 10 || segundaNota > 10 || terceiraNota > 10 || quartaNota > 10 ) {
  console.log('Por favor, insira uma nota válida');
} else {
  const resultado = ((primeiraNota * 0.2) + (segundaNota *0.2 ) + (terceiraNota * 0.2)+ (quartaNota * 0.4));
  console.log(`\nA sua média final foi ${resultado}`)
  if(resultado < 6){
    console.log('Você reprovou de ano, se esforçe mais da próxima vez');
  } else {
    console.log('Parabéns, você passou de ano, todo o seu esforço foi recompensado!')
  }
}



