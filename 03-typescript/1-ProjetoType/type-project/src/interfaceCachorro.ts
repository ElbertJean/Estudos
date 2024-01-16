type Usuario = {
    nome: string;
    email: string;
}

type Admin = {
    nome: string;
    email: string;
    admin: true;
}

const usuario: Usuario = {
    nome: 'Elbert',
    email: 'algumacoisa@gmail.com'
}

const admin: Admin = {
    nome: 'Elbert',
    email: 'algumacoisa@gmail.com',
    admin: true
}

function acessarSistema<T> (usuario: T) : T {
    return usuario
}

console.log(acessarSistema<Usuario>(usuario))
console.log(acessarSistema<Admin>(admin))
