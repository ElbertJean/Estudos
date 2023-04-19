<?php
 
/*Funções para Strings
strtoupper -> Transforma a string para maiúsculo.
strtolower -> Transforma a string para minúsculo.
substr -> Retorna uma parte de uma string.
str_pad -> Complementa a string com uma quantidade especificada de caracteres.
str_repeat -> Repete a string determinadas vezes.
strlen -> Conta o comprimento da string.
str_replace -> Substituie uma palavra em especifício.
strpos -> Procura a posição de uma determinada palavra.

******************STRTOUPPER******************
$nome = "elbert";
$novoNome = strtoupper($nome);

echo $novoNome;

******************STRTOLOWER******************
$nome = "Elbert";
$novoNome = strtolower($nome);

echo $novoNome;

******************SUBSTR******************
$mensagem = "Olá Mundo";
echo substr($mensagem, 4);

******************STR_PAD******************
$objeto = "mouse";
$novoObjeto = str_pad($objeto, 7, "*", STR_PAD_LEFT) RIGHT OU BOTH;

echo $novoObjeto; 

******************STR_REPEAT******************
$string = str_repeat("Batata ", 5);
echo $string;

******************STRLEN******************
$mensagem = "Olá mundo";
echo strlen($mensagem);

******************STR_REPLACE******************
$texto = "A seleção Argentina será campeã da copa do mundo de 2018";
$novoTexto = str_replace("Argentina", "Brasileira", $texto);
echo $novoTexto;

******************STRPOS******************
$texto = "A seleção Argentina será campeã da copa do mundo de 2018";
echo strpos($texto, "copa");

*/

