"use strict";
var Carros;
(function (Carros) {
    Carros[Carros["Chevette"] = 0] = "Chevette";
    Carros[Carros["Corsa"] = 1] = "Corsa";
    Carros[Carros["Monza"] = 2] = "Monza";
    Carros[Carros["Fusca"] = 3] = "Fusca";
})(Carros || (Carros = {}));
function posicao() {
    let x = 1;
    if (x === Carros.Chevette) {
        alert('true');
    }
    else {
        alert('false');
    }
}
posicao();