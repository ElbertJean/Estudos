<?php 

    require_once "./1-conta.php";

    class ContaCorrente extends Conta {
        public $limite;

        function __construct ($agencia, $conta, $titular, $saldo, $ativa, $limite) {
            
            //parent:: referência a classe pai
            parent::__construct($agencia, $conta, $titular, $saldo, $ativa, $limite);   
            $this->limite = $limite;
        }

        function Sacar($quantidade) {
            if (($this->saldo + $this->limite) >= $quantidade){
                parent::Sacar($quantidade);
                return true;
            } else {
                echo "Saldo insuficiente!";
                parent::Extrato();
                return false;
            }
        }
    }
?>