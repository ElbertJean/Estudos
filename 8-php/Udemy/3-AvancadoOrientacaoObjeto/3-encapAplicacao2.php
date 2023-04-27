<?php 

    require_once "./3-encapFuncionario.php";
    require_once "./3-encapHeranca.php";

    $maria = new Aprendiz;
    $maria->setSalario(500);

    echo "O salário da Maria é: R$" . $maria->getSalario() . " reais";
?>