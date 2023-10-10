<?php 

    require_once "./3-encapFuncionario.php";

    $joao = new Funcionario;
    $joao->setSalario(5000);
    echo "O salário de João é R$ " . $joao->getSalario() . " reais";
?>