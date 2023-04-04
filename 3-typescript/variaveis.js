var a = 6;
var b = 15;

if (a === 6) {
    let a = 5      //let é uma variável que se mantem apenas dentro do bloco
    var b = 3;     //var é uma variável global
    console.log(a);
    console.log(b);
}

console.log (a);
console.log(b);