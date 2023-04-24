<?php

    $dadosParaConexao = "host=localhost port=5432 dbname=ej_informatica user=elbinho password=Dgs589*-+";
    $dbConexao = pg_connect($dadosParaConexao); 

    if ($dbConexao -> connect_errno) {
        echo "Não foi possível conectar ao servidor";
    } else {
        echo "Conectado com sucesso <br>";
    }

    $resultado = pg_query($dbConexao, "SELECT nome_produto, descricao, preco FROM produtos");
    if(!$resultado) {
        echo "Ocorreu um erro";
        exit;
    }
    
    while ($row = pg_fetch_row($resultado)) {
        echo "$row[0]     $row[1]       $row[2]";
        echo "<br />\n";
    }

?>
