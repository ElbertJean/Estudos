<?php

class Conta 
{
    private $titular;
    private $saldo;
    private static $numeroDeContas = 0;

    public function __construct(Titular $titular)
    {
        $this->titular = $titular; 
        $this->saldo = 0;
        self::$numeroDeContas++;
    }

    //public function __destruct ()
    //{
    //    self :: $numeroDeContas-- ;
    //}

    public function sacar(float $valorASacar){
        if ($valorASacar > $this -> saldo){
            echo "Saldo indisponível para saque." . "\n";
            return;
        }
        
        $this -> saldo -= $valorASacar;  
    }

    public function depositar(float $valorADepositar){
        if ($valorADepositar < 0) {
            echo "Valor inválido para depósito" . "\n";
            return;
        }
        
        $this -> saldo += $valorADepositar;
    }

    public function transferir (float $valorATransferir, Conta $contaDestino) {
        if ($valorATransferir > $this -> saldo){
            echo "Não foi possível realizar a transferência, por favor, verifique seu saldo atual \n\n";
            return;
        }
       
        $this -> sacar ($valorATransferir);
        $contaDestino -> depositar ($valorATransferir);
    }

    public function recuperaSaldo () : float {
        return $this -> saldo;
    }

    public static function recuperaNumeroDeContas () : int
    {
        return self :: $numeroDeContas++;
    }

    public function recuperaNomeTitular(): string
    {
        return $this->titular->recuperaNome();
    }
    
    public function recuperaCpfTitular(): string
    {
        return $this->titular->recuperaCpf();
    }
}
