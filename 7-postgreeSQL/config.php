<?php

$dadosParaConexao = "host=localhost port=5432 dbname=ej_informatica user=elbinho password=Dgs589*-+";
$dbConexao = pg_connect($dadosParaConexao); 

if ($dbConexao -> connect_errno) {
    echo "Não foi possível conectar ao servidor";
} else {
    echo "Conectado com sucesso";
}

?>