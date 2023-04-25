<?php

    class Produto{
        public $codigo;
        public $descricao;
        public $valor;

        function __construct ($codigo, $descricao, $valor) {
            $this->codigo = $codigo;
            $this->descricao = $descricao;
            $this->valor = $valor;
        }

        /*
            function __destruct () {
                echo "O objeto" . $this->descricao . " foi finalizado";
            }
        */
    }

?>