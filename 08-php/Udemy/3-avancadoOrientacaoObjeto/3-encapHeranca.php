<?php

    require_once "./3-encapFuncionario.php";

    class Aprendiz extends Funcionario {
    
        function getSalario () {
            return $this->salario *1.10;
        }
    }
?>