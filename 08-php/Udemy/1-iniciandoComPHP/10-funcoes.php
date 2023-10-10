<?php

    function calcularIMC($altura, $peso) {
        $imc = ($peso / ($altura * $altura));
        echo (round($imc,2)) . "<br>";
    }

    function IMC($altura, $peso) {
        return ($peso / ($altura * $altura));
    }

    calcularIMC (1.75, 61);

    echo "<p>";

    function soma100 ($variavel, $valor = 100) {
        $variavel += $valor;
        echo $variavel;
    }

    soma100(50);

    echo "<p>";

//RECURSIVIDADE
    function fatorial($numero){
        if ($numero == 1) {
            return $numero;
        } else {
            return $numero * fatorial($numero -1);
        }
    }

    echo fatorial(3);
?>