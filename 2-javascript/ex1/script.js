function enviar () {
    var formulario = document.getElementById("formulario");
    
    var quilos = Number(formulario.quilos.value);  
    var metros = Number(formulario.metros.value);
    var centimetros = Number(formulario.centimetros.value);
 
    var altura = (metros * 100 + centimetros) / 100;
    
    var imc = quilos / (altura * altura);

    formulario.resultado.value = imc.toFixed(2);
}
