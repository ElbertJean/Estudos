console.log('Seja bem vindo');
console.log('Exercício 12 - Calculadora de Área \n')

console.log('Escolha o número correspondente para fazer o cálculo da área:')
console.log('1 - Quadrado');
console.log('2 - Retângulo');
console.log('3 - Triângulo');
console.log('4 - Circulo');
const a = prompt('Escolha a opção desejada');

switch(a) {
  case '1':
  const numero1 = prompt ('\nQual o tamanho do lado do quadrado?');
  const valorQuadrado = Number(numero1);

  if(isNaN(valorQuadrado) || valorQuadrado < 0){
    console.log('Insira um número válido')
  } else {
    const resultadoQuadrado = valorQuadrado * valorQuadrado;
    console.log(`A área do quadrado é ${resultadoQuadrado}`);
  }
  break;

  case '2':
  const numero2Altura = prompt ('\nQual a altura?');
  const numero2Largura = prompt ('Qual a largura?');
  const valor2Altura = Number(numero2Altura);
  const valor2Largura = Number(numero2Largura);

  if(isNaN(valor2Altura) || isNaN(valor2Largura)) {
    console.log('Por favor, insira um número válido')
  } else if (valor2Altura < 0 || valor2Largura < 0) {
    console.log('Por favor, insira um número válido')
  } else {
    const resultadoRetangulo = valor2Altura * valor2Largura;
    console.log(`A área do retângulo é ${resultadoRetangulo}`);
  }
  break;

  case '3':
  const numero3Altura = prompt ('\nQual a altura?');
  const numero3Largura = prompt ('Qual o tamanho da base?');
  const valor3Altura = Number(numero3Altura);
  const valor3Largura = Number(numero3Largura);

  if(isNaN(valor3Altura) || isNaN(valor3Largura)) {
    console.log('Por favor, insira um número válido')
  } else if (valor3Altura < 0 || valor3Largura < 0) {
    console.log('Por favor, insira um número válido')
  } else {
    const resultadoTriangulo = (valor3Altura * valor3Largura) / 2;
    console.log(`A área do retângulo é ${resultadoTriangulo}`);
  }
  break;

  case '4':
  const raio = prompt ('\nQual o tamanho do raio?');
  const valorRaio = Number(raio);

  if(isNaN(valorRaio) || valorRaio < 0) {
    console.log('Por favor, insira um número válido')
  } else {
    const resultadoCirculo = 3.1415926535898 * (valorRaio * valorRaio)
    console.log(`A área do circulo é ${resultadoCirculo.toFixed(2)}`);
  }
  break;

  default:
  console.log('opção inválida');
}

