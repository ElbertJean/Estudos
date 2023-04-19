<?php

class Conta 
{
    private string $cpfTitular;
    private string $nomeTitular;
    private float $saldo = 0 ;

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

    public function recuperarSaldo (){
        return $this -> saldo;
    }
}

$primeiraConta = new Conta ();
$primeiraConta->cpfTitular = "123.456.789-00";
$primeiraConta->nomeTitular = "Elbin";
$primeiraConta->saldo = "500";

$segundaConta = new Conta ();
$segundaConta->cpfTitular = "060.027.668-63";
$segundaConta->nomeTitular = "Tia Nice";
$segundaConta->saldo = "5500";


print_r ($segundaConta);

$segundaConta -> depositar (-500);

print_r ($segundaConta);

///////////////////////////////////////////////////////////////////////////

$contaUm = new Conta ();
$contaUm -> depositar (500);
$contaDois = new Conta ();
$contaUm -> transferir (300, $contaDois);

echo $contaUm -> saldo . "\n";
echo $contaDois -> saldo;