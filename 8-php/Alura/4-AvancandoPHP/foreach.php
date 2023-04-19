<?php

$contasCorrentes = [
    "123.456.789-10" => [
        "titular" => "Elbert", 
        "saldo" => 1000
    ], 
    "123.456.234-10" => [
        "titular" => "Jhonny", 
        "saldo" => 7000
    ], 
    "123.456.722-10" => [
        "titular" => "João", 
        "saldo" => 1800
    ]
];

$contasCorrentes['123.123.123-12'] = [
    "titular" => "Helenice",
    "saldo" => 3500
];

foreach ($contasCorrentes as $indice => $valor) {
    echo "CPF: " . $indice . " : " . $valor["titular"] . "\n";
}