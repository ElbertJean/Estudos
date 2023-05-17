<?php 

    class Conta {
        public $agencia;
        public $conta;
        public $titular;
        public $saldo;
        public $ativa;

        function __construct ($agencia, $conta, $titular, $saldo, $ativa) {
            $this->agencia = $agencia;
            $this->conta = $conta;
            $this->titular = $titular;
            $this->saldo = $saldo;
            $this->ativa = $ativa;
        }

        function Sacar ($valor) {
            if($valor > 0) {
                $this->saldo -= $valor;
            } else {
                echo "Valor insuficiente para saque";
            }
        }
        /*
            function Sacar ($valor) {
                if($this->saldo > $valor && $valor > 0) {
                    $this->saldo -= $valor;
                } else {
                    echo "Valor insuficiente para saque";
                }
            }
        */
        function Depositar ($valor) {
            if($valor > 0) {
                $this->saldo += $valor;
            } else {
                echo "Erro! Valor inválido <br>";
            }
        }

        function Extrato () {
            return $this->saldo;
        }
    }



?>