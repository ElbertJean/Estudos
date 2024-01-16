function echoMelhorado<T>(objeto: T): T {
    return objeto
}

console.log(echoMelhorado<string>('João').length)
console.log(echoMelhorado<number>(27))
console.log(echoMelhorado<object>({ nome: 'João', idade: 27 }))

// -----------------------------------------------------
// Generics disponiveis na API
// -----------------------------------------------------
const avaliacoes: Array<number> = [10, 9.3, 7.7]
avaliacoes.push(8.4)
console.log(avaliacoes)


// -----------------------------------------------------
// Array
// -----------------------------------------------------
function imprimir<T>(...args: T[]) {
    args.forEach((elemento) => console.log(elemento))
}
imprimir<string | number| boolean | string>('João', 27, true, 'Legal') 


// -----------------------------------------------------
// Typo Genérico
// -----------------------------------------------------
type Echo = <T>(data: T) => T
const chamarEcho: Echo = echoMelhorado
console.log(chamarEcho<string>('Alguma coisa'))


// -----------------------------------------------------
// Classe com Generics
// -----------------------------------------------------
abstract class OperacaoBinaria<T, R> {
    constructor(public operando1: T, public operando2: T) {}
    abstract executar(): R
}

class SomaBinaria extends OperacaoBinaria<number, number> {
    executar(): number {
        return this.operando1 + this.operando2
    }
}
console.log(new SomaBinaria(10, 20).executar()) 

class Data {
    dia: number
    public mes: number
    ano: number

    constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}

class DiferencaEntreDatas extends OperacaoBinaria<Data, string> {
    getTime(data: Data): number {
        let { dia, mes, ano } = data
        return new Date(`${mes}/${dia}/${ano}`).getTime()
    }
    executar(): string {
        const t1 = this.getTime(this.operando1)
        const t2 = this.getTime(this.operando2)
        const diferenca = Math.abs(t1 - t2)
        const dia = 1000 * 60 * 60 * 24
        console.log('entrei aqui')
        return `${Math.ceil(diferenca / dia)} dias`
    }
}

const d1 = new Data(14, 6, 1996)
const d2 = new Data(10, 12, 1993)
console.log(new DiferencaEntreDatas(d1, d2).executar())


// -----------------------------------------------------
// Classe com Generics
// -----------------------------------------------------
class Fila<T> {
    private fila: Array<T>

    constructor(...args: T[]) {
        this.fila = args
    }

    entrar(elemento: T) {
        this.fila.push(elemento)
    }

    proximo(): T | null {
        if(this.fila.length >= 0 && this.fila[0]) {
            const primeiro = this.fila[0];
            this.fila.slice(0, 1);
            return primeiro
        } else {
            return null
        }
    }

    imprimir() {
        console.log(this.fila)
    }
}

const fila = new Fila<string>('Gui', 'Pedro', 'João', 'Larissa');
fila.imprimir()
fila.entrar('Elbert')
fila.imprimir();
console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());