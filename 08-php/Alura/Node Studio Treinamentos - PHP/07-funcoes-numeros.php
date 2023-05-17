<?php
 
/*Funções para Números
number_format => Formata os números
round => Arredonda os números, tanto para baixo quanto para cima.
ceil => Arredonda sempre para cima.
floor => Arredonda sempre para baixo
rand =>

******************NUMBER_FORMAT******************
$db = 1234.56;
$preco = number_format($db, 2, ",", "."); 2=casas decimais
echo "O valor do produto é R$ $preco";

******************ROUND******************
$peso = 125.5;
$altura = 1.75;
$imc =  round($peso / ($altura * $altura), 2);

******************CEIL******************
$db=1234.10;
echo ceil($db);

******************FLOOR******************
$db=1234.10;
echo floor($db);

******************RAND******************
echo rand(1,100);
*/


