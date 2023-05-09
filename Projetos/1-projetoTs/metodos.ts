import {Livros} from './livros';

export class Metodo implements Livros {

    setPreco(preco: number) {
        if (preco < 0 || isNaN(preco)) {
            console.log `Erro! Insira um valor válido`
        } else {
            this.preco = preco;
            console. log (`Preço do livro ${this.titulo} alterado com sucesso para ${this.preco} reais`);
        }
    }

    getDescricao() {
        console.log(
            `Nome do livro : ${this.titulo}, 
            Autor: ${this.autor}, 
            Número de páginas: ${this.paginas},
            Ano de lançamento: ${this.ano}, 
            Preço do livro: ${this.preco}`
        );
    }

}