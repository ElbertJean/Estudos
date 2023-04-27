<?php

    class Funcionario {
        private $matricula;
        private $datanasc;
        protected $salario;
        public $nome;

        function setSalario($salario) {
            if(is_numeric($salario) && $salario > 0) {
                $this->salario = $salario;
            } else {
                echo "Insira um valor válido";
            }
        }

        function getSalario (){
            return $this->salario;
        }
    }

?>