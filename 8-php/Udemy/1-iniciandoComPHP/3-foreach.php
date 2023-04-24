<?php

$contas = [
	123456789 => [
	    "titular" => "Elbert",
			"saldo" => 1000
    ],
	123456543 => [
		"titular" => "João",
			"saldo" => 0				
	]			
];

foreach ($contas AS $indice => $valor){
    echo "$indice = $valor[titular] <br>";
}

echo "<br>";

$frutas = ["maça", "banana", "pêra", "uva", "abacaxi"];

echo "<strong>Cesta de Frutas</strong> <br>";
foreach ($frutas as $nome) {
    echo "$nome <br>";
}

?>