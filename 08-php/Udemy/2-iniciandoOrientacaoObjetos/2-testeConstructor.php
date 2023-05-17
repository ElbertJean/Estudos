<?php

    require_once './2-constructor.php';

    $produto1 = new Produto (1, "The X Factor", 2.99);
    
    echo "Manipulando o objeto $produto1->descricao <br>";
    echo "Código: $produto1->codigo <br>";
    echo "Nome do produto: $produto1->descricao <br>";
    echo "Valor: $produto1->valor <br><br>";

    print_r($produto1);
?>