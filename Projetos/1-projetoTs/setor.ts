import {Livros} from './livros';

export class Setor extends Livros{
    public genero: string;
    public corredor: number;

    public constructor (titulo: string, autor: string, paginas: number, 
        ano: number, preco: number, genero: string, corredor: number) {
            super(titulo, autor, paginas, ano, preco);
            this.genero = genero;
            this.corredor = corredor;
        }

    public getSetor() {
        console.log(
            `O livro ${this.titulo} se encontra no setor de ${this.genero}, corredor ${this.corredor}`
         );
    }
}