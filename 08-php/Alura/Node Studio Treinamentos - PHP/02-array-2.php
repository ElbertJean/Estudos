<?php

//atribui um objeto a array, deixando indicando o indice
$cadastroCliente = ["nome" => "Elbert", "idade" => 25, "altura" => 1.75];
$cadastroCliente ["peso"] = 67.5;
var_dump ($cadastroCliente);
print_r ($cadastroCliente);
echo $cadastroCliente ["nome"] . "\n\n";

foreach ($cadastroCliente as $indice => $valor) {
    echo "$indice : $valor" . "\n";
}