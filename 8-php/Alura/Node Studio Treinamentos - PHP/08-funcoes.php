<?php

//recebe $variaveis como parâmetro.
function calcularMedia ($nome, $n1, $n2, $n3, $n4){
    $media = ($n1 + $n2 + $n3 + $n4) / 4; 

    if($media <7){ 
        echo "$nome foi reprovado com a média $media";
    } else {
        echo "$nome foi aprovado com a média $media";
    }
}

calcularMedia("Elbert Jean", 5 , 6 ,8 ,8);