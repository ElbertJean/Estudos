class Cliente {
    nomeCliente: string;
    idadeCliente: number;
    generoPreferido: string;

    constructor(nomeCliente: string, idadeCliente: number, generoPreferido: string){
              this.nomeCliente = nomeCliente;
              this.idadeCliente = idadeCliente;
              this.generoPreferido = generoPreferido;
    }

    getCliente() {
              console.log(
                  `Nome o cliente : ${this.nomeCliente}, 
                  Idade do cliente: ${this.idadeCliente}, 
                  Gênero preferido do cliente : ${this.generoPreferido}`
              )
          }
}

const cliente1 = new Cliente('Diogo', 19, 'Comédia');
console.log(cliente1);