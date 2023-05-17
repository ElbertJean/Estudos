<?php

//array dentro de array
$times = ["paulistas" => ["Campeão" => "Corinthians", "Vice" => "Santos", "Terceiro" => "Palmeiras", "Quarto" => "São Paulo"], 
            "mineiros" => [1 => "Atlético Mineiro", "Cruzeiro", "Bahia", "Sergipe", "São José"],
            "outros" => ["Flamengo", "Fluminense", "Vasco", "Bragantino"]];

$times["paulistas"]["Vale do Paraiba"] = "São José dos Campos"; 
$times["mineiros"][5] = "Argentina";
print_r ($times) . "\n\n";
echo "\n\n";

foreach ($times["mineiros"] as $indice => $valor) {
    echo "$indice : $valor" . "\n";
}