<?php 

    require_once './produtoClass.php';

    $produto = new Produto ();
    $produto -> codigo = 1;
    $produto -> descricao = "Papel de Dente";
    $produto -> valor = 1.99;
    
    $produto->Relatorio();

?>