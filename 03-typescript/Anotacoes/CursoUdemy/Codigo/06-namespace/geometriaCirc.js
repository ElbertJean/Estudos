"use strict";
var Geometria;
(function (Geometria) {
    const PI = 3.1416;
    function areaCircunferencia(raio) {
        return PI * Math.pow(raio, 2);
    }
    Geometria.areaCircunferencia = areaCircunferencia;
})(Geometria || (Geometria = {}));
