<?php

$servidor = "Localhost";

$usuario = "root";

$senha ="";

$conexao = pg_connect($servidor, $usuario, $senha) or
die ("Não foi possível conectar ao servidor PostGreSQL");

echo "Conexão efetuada com sucesso!!";
?>