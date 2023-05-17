<?php

$conta1 = [
    "titular" => "Elbert", 
    "saldo" => 1000
];

$conta2 = [
    "titular" => "Jhonny", 
    "saldo" => 7000
];

$conta3 = [
    "titular" => "João", 
    "saldo" => 1800
];

$contasCorrentes = [$conta1, $conta2, $conta3];

for ($i=0; $i < count($contasCorrentes) ; $i++) { 
    echo $contasCorrentes[$i]["titular"] . "\n";
}