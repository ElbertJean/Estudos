<?php

$peso = 125.5;
$altura = 1.75;
$imc =  round($peso / ($altura * $altura), 2);

echo "\n";
echo "***********************************************"  . "\n";
echo "***************** TABELA IMC ******************" . "\n";
echo "***********************************************" . "\n";
echo "* Menor que 18.5       - Magreza **************" . "\n";
echo "* Entre 18.5 e 24.9    - Normal ***************" . "\n";
echo "* Entre 25.0 e 29.9    - Sobrepeso ************" . "\n";
echo "* Entre 30.0 e 34.9    - Obesidade Grau I *****" . "\n";
echo "* Entre 35.0 e 39.9    - Obesidade Grau II ****" . "\n";
echo "* Maior ou igual a 40 - Obesidade Grau III ****" . "\n";
echo "***********************************************" . "\n";
echo "* Seu IMC é de $imc **************************" . "\n";
echo "***********************************************". "\n";
if ($imc <=18.5){
    echo "Você está abaixo do peso **********************" . "\n";
    echo "***********************************************" . "\n";
} else if ($imc <= 24.9) {
    echo "Seu peso está normal **************************" . "\n";
    echo "***********************************************" . "\n";
} else if ($imc <= 29.9) {
    echo "Você está sobrepeso ***************************" . "\n";
    echo "***********************************************" . "\n";
} else if ($imc <= 34.9) {
    echo "Você está com obesidade Grau I ****************" . "\n";
    echo "***********************************************" . "\n";
} else if ($imc <= 39.9) {
    echo "Você está com obesidade Grau II ***************" . "\n";
    echo "***********************************************" . "\n";
} else {
    echo "Você está com obesidade grau III **************" . "\n";
    echo "***********************************************" . "\n";
}