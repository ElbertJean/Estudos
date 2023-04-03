function enviar (event) {
    var formulario = document.getElementById("formulario");
    var paragraph = document.getElementById("paragraph");
    var tabela_imc = document.getElementById("tabelaIMC"); 
    
    var quilos = Number(formulario.quilos.value);
    if (isNaN(quilos) || quilos <=0 || quilos >300){
        paragraph.innerHTML = "Por favor, insira um peso válido!";
    } else {
        
        var metros = Number(formulario.metros.value);
        if (isNaN(metros) || metros <=0 || metros >2) {
            paragraph.innerHTML = "Por favor, insira uma altura válida";
        } else {

            var centimetros = Number(formulario.centimetros.value);
            if (isNaN(centimetros) || centimetros <=0 || centimetros > 99){
                paragraph.innerHTML = "Por favor, insira o valor válido de centimetros";
            } else {
                
                var altura = (metros * 100 + centimetros) / 100;
                var imc = quilos / (altura * altura);
            
                formulario.resultado.value = imc.toFixed(2);
                paragraph.innerHTML="";

                tabela_imc.src ="./tabela-imc.png";

            }
        }
    }
}

function reset() {
    document.getElementById("formulario").reset();
}
