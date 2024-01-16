"use strict";
var Area;
(function (Area) {
    const PI = 3.1416;
    function areaRetangulo(base, altura) {
        return base * altura;
    }
    Area.areaRetangulo = areaRetangulo;
})(Area || (Area = {}));
