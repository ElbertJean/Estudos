<?php

$servidor = "localhost";

$usuario = "postgres";

$senha ="Dgs589*-+";

$conexao = pg_connect($servidor, $usuario, $senha) or
die ("Não foi possível conectar ao servidor PostGreSQL");

echo "Conexão efetuada com sucesso!!";
?>