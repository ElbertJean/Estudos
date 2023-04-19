<?php 

// atribui um objeto a array, com indice automático
$carro = ["Chevette", "Onix", "Gol", "Kadette"];
$carro [] = "Cruze";
var_dump ($carro);
print_r ($carro) . "\n";
echo $carro[1] . "\n\n";

//para cada objeto (quantidade) de $carros, esse valor salva em $modelos
foreach ($carro as $modelo){
    echo "$modelo \n";
}
