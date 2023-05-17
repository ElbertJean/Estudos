<?php

/* 
* is_array($array) = verifica se uma determinada variável é um array.
* in_array($valor, $array) = verifica se um determinado valor existe em alguma posição do array.
* array_keys($array) = retorna um novo arrays com as chaves do arrays passado como parâmetro.
* array_values($array) = retorna um novo array com os valores do array passado como parâmetro.
* array_merge($array1, $array2) = agrega o conteúdo dos dois arrays.
* array_pop($array) = exlui a ultima posição do array.
* array_shift($array) = exclui a primeira posição do array.
* array_unshift($array, "valor") = adiciona um ou mais elementos no início do array.
* array_push($array, "valor1", "valor2") = adiciona um ou mais elementos no final do array.
* array_combine($keys, $values) = mescla os dois arrays passados.
* array_sum() = calcula a soma dos elementos de array.
* explode("/", "20/01/2001") = transforma strings em array.
* implode("-", $array) = transforma array em string.
*/

/* 
******************IS_ARRAY******************
$nomes = ["Elbert", "João", "Helenice", "Jhonny"];

if (is_array($nomes)){
    echo "É um array";
} else {
echo "Não é uma array";
}

******************IN_ARRAY******************
$nomes = ["Elbert", "João", "Helenice", "Jhonny"];

if (in_array("Elbert", $nomes)) {
    echo "Nome existe na array";
} else {
    echo "Nome não existe na array";
}

******************ARRAY_KEYS******************
$nomes = ["Elbert", "João", "Helenice", "Jhonny"];

$keys = array_keys($nomes);
print_r ($keys);

******************ARRAY_VALUES******************
$nomes = ["Elbert", "João", "Helenice", "Jhonny"];

$values = array_values($nomes);
print_r($values);

******************ARRAY_MERGE******************
$carros = ["Chevette", "Onix"];
$motos = ["bis", "cb150"];

$veiculos = array_merge($carros, $motos);

print_r ($veiculos);

******************ARRAY_POP******************
$carros = ["Chevette", "Onix", "Gol"];
print_r ($carros);
array_pop($carros);
print_r($carros);

******************ARRAY_SHIFTH******************
$carros = ["Chevette", "Onix", "Gol"];
print_r ($carros);
array_shift($carros);
print_r($carros);

******************ARRAY_UNSHIFTH******************
$carros = ["Chevette", "Onix", "Gol"];
print_r($carros);
array_unshift($carros, "Camaro", "Kadette");
print_r($carros);

******************ARRAY_PUSH******************
$carros = ["Chevette", "Onix", "Gol"];
print_r($carros);
array_push($carros, "Camaro", "Kadette");
print_r($carros);

******************ARRAY_COMBINE******************
$carros = ["Chevette", "Onix", "Gol"];
$tipo = ["clássico", "luxo", "rebaixado"];

$times = array_combine($tipo, $carros);  //Primeiro parametro: Indice , Segundo parametro: valor(Objeto).
print_r ($times);

******************ARRAY_SUM******************
$soma =[5 , 4 ,7 ,3];

echo array_sum($soma);

******************ARRAY_EXPLODE******************
$data = "06/09/2021";
$novaData = explode ("/", $data); //Primeiro parametro: Divisor , Segundo parametro : String
print_r ($novaData);

$frase = "Meu nome não é Jhonny";
$novaFrase = explode (" ", $frase);
print_r ($novaFrase);

******************ARRAY_IMPLODE******************
$nomes = ["Elbert", "Maria", "João", "José"];
$string = implode (", " , $nomes);
echo $string;
*/

