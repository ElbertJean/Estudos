//-----------------------------------------------------
// Exemplo 1 - Type Cast com as
//-----------------------------------------------------
const valor: unknown = 'Olá pessoal!';
console.log((valor as string).length) ;
// console.log(typeof(valor).length); -> Vai dar erro!


//-----------------------------------------------------
// Exemplo 2 - Type Cast com <>
//-----------------------------------------------------
const carro: unknown = 'Chevette';

const tamanhoString: number = (<string>carro).length;
console.log(tamanhoString)