enum Carros {Chevette, Corsa, Monza, Fusca}

function posicao (){
    let x = 1;
    if (x === Carros.Chevette) {
        alert('true') 
    } else {
        alert ('false')
    }
}

posicao();