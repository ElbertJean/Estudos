export class Livros { 
    titulo: string;
    autor: string;
    paginas: number;
    ano: number;
    preco: number;

    constructor(titulo: string, autor: string, paginas: number, ano: number, preco: number){
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.ano = ano;
        this.preco = preco;
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

    setPreco(preco: number) {
        if (preco < 0) {
            console.log `Erro! Insira um valor válido`
        } else {
            this.preco = preco;
            console. log (`Preço do livro ${this.titulo} alterado com sucesso para ${this.preco} reais`);
        }
    }
}
