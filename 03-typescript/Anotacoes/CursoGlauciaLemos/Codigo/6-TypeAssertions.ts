//-----------------------------------------------------
// Exemplo 0 - Type Assertions  - Demonstração
//-----------------------------------------------------
type Humano = {
    nome: string;
    idade: number;
    idioma: string;
}

const humano = {
    idade: 36,
    idioma: 'Português'
}
;

// const humano2: Humano = humano;   // Vai gerar um erro!
// console.log(humano2.nome.toUpperCase());


//-----------------------------------------------------
// Exemplo 1 - Type Assertions
//-----------------------------------------------------

function exibirPrecoFinal (preco: number, desconto: number, formato: boolean) : number | string {
    const precoComDesconto = preco * (1 - desconto);

    return formato ? `R$ ${precoComDesconto.toFixed(2)}` : precoComDesconto
}

const descontoFinal1 = exibirPrecoFinal(100, 0.05, true) as string;
const descontoFinal2 = <number>exibirPrecoFinal(100, 0.05, false);
console.log(descontoFinal1)
console.log(descontoFinal2)