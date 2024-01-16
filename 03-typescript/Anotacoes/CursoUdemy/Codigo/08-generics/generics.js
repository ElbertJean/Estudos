"use strict";
function echoMelhorado(objeto) {
    return objeto;
}
console.log(echoMelhorado('João').length);
console.log(echoMelhorado(27));
console.log(echoMelhorado({ nome: 'João', idade: 27 }));
// -----------------------------------------------------
// Generics disponiveis na API
// -----------------------------------------------------
const avaliacoes = [10, 9.3, 7.7];
avaliacoes.push(8.4);
console.log(avaliacoes);
// -----------------------------------------------------
// Array
// -----------------------------------------------------
function imprimir(...args) {
    args.forEach((elemento) => console.log(elemento));
}
imprimir('João', 27, true, 'Legal');
const chamarEcho = echoMelhorado;
console.log(chamarEcho('Alguma coisa'));
// -----------------------------------------------------
// Classe com Generics
// -----------------------------------------------------
class OperacaoBinaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
class SomaBinaria extends OperacaoBinaria {
    executar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new SomaBinaria(10, 20).executar());
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
class DiferencaEntreDatas extends OperacaoBinaria {
    getTime(data) {
        let { dia, mes, ano } = data;
        return new Date(`${mes}/${dia}/${ano}`).getTime();
    }
    executar() {
        const t1 = this.getTime(this.operando1);
        const t2 = this.getTime(this.operando2);
        const diferenca = Math.abs(t1 - t2);
        const dia = 1000 * 60 * 60 * 24;
        console.log('entrei aqui');
        return `${Math.ceil(diferenca / dia)} dias`;
    }
}
const d1 = new Data(14, 6, 1996);
const d2 = new Data(10, 12, 1993);
console.log(new DiferencaEntreDatas(d1, d2).executar());
// -----------------------------------------------------
// Classe com Generics
// -----------------------------------------------------
class Fila {
    constructor(...args) {
        this.fila = args;
    }
    entrar(elemento) {
        this.fila.push(elemento);
    }
    proximo() {
        if (this.fila.length >= 0 && this.fila[0]) {
            const primeiro = this.fila[0];
            this.fila.slice(0, 1);
            return primeiro;
        }
        else {
            return null;
        }
    }
    imprimir() {
        console.log(this.fila);
    }
}
const fila = new Fila('Gui', 'Pedro', 'João', 'Larissa');
fila.imprimir();
fila.entrar('Elbert');
fila.imprimir();
console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());
