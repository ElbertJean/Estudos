<?php

    require_once "./1-conta.php";

    $cliente1 = new Conta (7729, 13500, "Elbert", 140, true);

    if ($cliente1->ativa == true) {
        echo "Conta <b>ativa</b> <br>";
    } else {
        echo "Conta <b>inativa</b> <br>";
    }

    print $cliente1->saldo . "<br>";
    $cliente1->Sacar(10);
    echo $cliente1->Extrato() . "<br>";
    $cliente1->Depositar(-85);
    echo $cliente1->saldo;


?>