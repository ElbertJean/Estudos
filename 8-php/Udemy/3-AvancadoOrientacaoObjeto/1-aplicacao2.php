<?php

    require_once "./1-contaCorrente.php";

    $contaCorrente = new ContaCorrente (7729, 13500, "Elbert", 570, true, 1000);

    echo $contaCorrente->Extrato();
    echo $contaCorrente->Sacar(1670);
    echo $contaCorrente->saldo;


?>
