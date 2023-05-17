<?php

$idade = 17;
$pessoas = 2;

echo "Bem Vindo ao Bar dos Amigos \n";
echo "Aberto para maiores de 18 anos ou 16 anos acompanhado\n\n";

if ($idade >= 18) {
    echo "Você é de maior! \n";
    echo 'Pode entrar';
} else if ($idade <18 && $pessoas >1) {
    echo "Você está entrando acompanhado \n";
    echo "Pode entrar";
} else {
    echo "Você é menor de idade e não está acompanhado \n";
    echo "Você não pode entrar";
}