//-----------------------------------------------------
// Exemplo 0 - Satisfies Operator  - Demonstração
//-----------------------------------------------------

export {}

type NomeCidade = 'Rio de Janeiro' | 'São Paulo' | 'Salvador' | 'Brasília';

type CidadeCoordenadas = {
    x: number;
    y: number;
}

type Cidade = NomeCidade | CidadeCoordenadas;

type Pessoa = {
    localNascimento: Cidade;
    residenciaAtual: Cidade;
}

const pessoa = {
    localNascimento: 'Salvador',
    residenciaAtual: {x: 9, y: 10},
} satisfies Pessoa; 

console.log(pessoa.localNascimento.toUpperCase())


// ==> Exemplo 02: Satisfies Operator

type Connection = {};

declare function createConnection(
  host: string,
  port: string,
  reconnect: boolean,
  poolsize: number
): Connection;

type Configuration = {
  host: string;
  port: string | number;
  tryReconnect: boolean | (() => boolean);
  poolSize?: number;
};

const config = {
  host: "localhost",
  port: 3306,
  tryReconnect: () => true,
  poolSize: 10,
} satisfies Configuration;

function connect() {
  let { host, port, tryReconnect } = config;

  createConnection(host, `${port}`, tryReconnect(), 10);
}