<?php

    class Produto{
        public $codigo;
        public $descricao;
        public $valor;
  
       /*
       function __construct ($codigo, $descricao, $valor) {
             $this->codigo = $codigo;
             $this->descricao = $descricao;
             $this->valor = $valor;
         }
       */ 

        function Relatorio(){
            print 'Codigo: ' . $this -> codigo . "<br>";
            print 'Descricao: ' . $this -> descricao . "<br>";
            print 'Valor: ' . $this -> valor . "<br>";
       }
    }

?>