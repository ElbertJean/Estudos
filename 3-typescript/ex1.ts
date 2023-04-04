class Saudacao {
    saudacao: string;

    constructor (public mensagem:string) {
        this.saudacao = mensagem;
    }
    saudacoes() {
        return `Olá, ${this.saudacao}`;
    }
}