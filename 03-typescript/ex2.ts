var Saudacoes = function () {
    function Saudacoes(mensagem : string) {
        this.saudacao = mensagem;
    }
    Saudacoes.prototype.Saudacoes = function () {
        return "Olá, " + this.saudacao;
    };
    return Saudacoes;
}();