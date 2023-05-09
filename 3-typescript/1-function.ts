function somarNumero (valor1: number, valor2: number) :number {
    return valor1 + valor2;
}

alert (somarNumero(5,4));


// => função anônima
const saudar = function (mensagem: string) {
    return mensagem;
}

console.log(saudar("Olá mundo"));


// => arrow function expression 
const saudacao = (mensagem: string) => {
    return mensagem;
}

console.log(saudacao("Olá mundo"));


// => Function constructor
const saudacoes = new Function('mensagem', 'return "Fala " + mensagem');
console.log (saudacoes("Galera"));


// => parâmetro opcional ?
function mensagem(mensagem1: string, mensagem2?: string) {
    return `${mensagem1}${mensagem2 ? mensagem2 : ''}`
}

console.log ('Hello', 'world');