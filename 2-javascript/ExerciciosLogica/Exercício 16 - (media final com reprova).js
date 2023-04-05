console.log('Seja bem vindo');
console.log('Exercício 16 - Média final com direito a reprova \n')

console.log('Calculadora de Média final');
console.log('Vamos calcular a sua média final e ver se você passou de ano ou não');
console.log('\nO peso das notas serão calculados da seguinte forma:')

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
  const resultado = (primeiraNota + segundaNota + terceiraNota + quartaNota) /4;
  console.log(`\nA sua média final foi ${resultado}`)
  if(resultado < 5){
    console.log('\nVocê tem direito a fazer a reprova')
    console.log('Tire uma nota acima de 7 para passar de ano')
    const b = prompt('Qual foi a sua nota de reprova?')
    const notaReprova = Number(b);
    if(isNaN(notaReprova) || notaReprova < 0 || notaReprova >10) {
      console.log ('Por favor, insira uma nota válida');
    } else if (notaReprova < 7) {
      console.log('Infelizmente você não passou na reprova');
      console.log('Nos vemos novamente ano que vem');
    } else{
      console.log('Parabéns, você passou na reprova e passou de ano!')
    }
  } else {
    console.log('Parabéns, você passou de ano, todo o seu esforço foi recompensado!')
  }
}



