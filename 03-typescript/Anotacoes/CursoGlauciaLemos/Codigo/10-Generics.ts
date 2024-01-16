//-----------------------------------------------------
//Exemplo 0 - Demonstração
//-----------------------------------------------------
function retornarElementosRandomicos<T>(items: T[]): T {
    let itemRandomico = Math.floor(Math.random() * items.length)
    return items[itemRandomico];
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosRandomicos = retornarElementosRandomicos<number>(numeros);
console.log(numerosRandomicos);

let paises = ['Brasil', 'Portugal', 'Espanha', 'Alemanha', 'Italia'];
let paisesRandomicos = retornarElementosRandomicos<string>(paises);
console.log(paisesRandomicos)

//-----------------------------------------------------
// Exemplo 1
//-----------------------------------------------------

function exibirElementos<T>(array: T[]): void {
    array.forEach((elemento) => {
      console.log(elemento);
    });
  };
  
  let number: number[] = [1, 2, 3, 4, 5];
  let states: string[] = ['São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Paraná', 'Santa Catarina', 'Rio Grande do Sul'];
  
  exibirElementos<number>(number);
  exibirElementos<string>(states);