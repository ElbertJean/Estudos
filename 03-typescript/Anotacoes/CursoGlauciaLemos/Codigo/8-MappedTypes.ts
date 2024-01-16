export {}

interface Pessoa {
    nome: string
    idade: number
    email: string
}

type PessoaOpcional = {
    [P in keyof Pessoa]?: Pessoa[P];
}

const pessoa: Pessoa = {
    nome: 'Joaquim',
    idade: 10,
    email: 'joaquim@.com'
}

const pessoaOpcional: PessoaOpcional = {
    nome: 'Joaquim'
}

console.log(pessoaOpcional);


// ==> Exemplo 01: Mapped Types

type Usuario = {
    nome: string;
    endereco: string;
    telefone: string;
    idade: number;
  };
  
  type UsuarioMappedType = {
    [P in keyof Usuario]?: Usuario[P]; // for in
  };
  
  // 'nome' | 'endereco' | 'telefone' | 'idade'
  
  const usuarioMapped: UsuarioMappedType = {
    nome: 'Glaucia Lemos',
    endereco: 'Rua 01, 123',
    idade: 27
  }
  
  console.log(usuarioMapped);
  
  // ==> Exemplo 02: Outros Tipos Avançados
  
  interface Livro {
    titulo: string;
    autor: string | null;
    preco: number;
    numeroPaginas: number;
  }
  
  type Artigo = Omit<Livro, 'numeroPaginas'>;
  
  type LivroModelo = Readonly<Livro>;
  
  const livro: LivroModelo = {
    autor: 'Boris Cherny',
    numeroPaginas: 324,
    preco: 19.99,
    titulo: 'Programming Typescript: Making Your JavaScript Applications Scale'
  }