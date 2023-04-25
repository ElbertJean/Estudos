<?php
/****
Manipulação de Arrays com PHP
@Author: RCT Treinamentos
******/

//Criando um array
$frutas = array('maça','manga','uva','banana');
//ou
$fruta = array(0=>'maça',1=>'manga',2=>'uva',3=>'banana');
//ou
$cores[] = 'Azul'; //0
$cores[] = 'Amarelo'; //1
$cores[] = 'Preto';  //2
$cores[] = 'Verde'; //3

//Acessando o array indexado:
echo $frutas[2];
echo $fruta[0];
echo $cores[1];
echo "<p>";


//Arrays Multidimensionais

$carros['Gol']['cor'] = 'Preto';
$carros['GOl']['ano'] = '2016';
$carros['Palio']['cor'] = 'cinza';
$carros['Palio']['ano'] = '2000';
$carros['Fox']['cor'] = 'Branco';
$carros['Fox']['ano'] = '2017';

echo "<br>";
echo $carros['Gol']['cor'];
echo "<br>";

	foreach($carros as $modelo => $caracteristicas){
			echo "=> Modelo $modelo <br>";
			foreach($caracteristicas as $caracteristica => $valor){
				echo "caracteristica $caracteristica => $valor <br>";
			}		
		}


// Funções manipuladoras de Arrays no PHP

// Retornando a quantidade de um Array: COUNT

	$var = array('Gato','Cachorro','Tartaruga','Peixe', 'cavalo');
	echo 'O array $var contém <b>' . count($var) .'</b> Animais.<br>';

// Verificando de existe determinado valor em um Arrays: IN_ARRAY

	if(in_array('elefante', $var)){
			echo "Tartaruga encontrada!!<br>";
		}else {
		echo "Não encontramos o animal desejado... <br>";
					}

//Convertendo uma String em um Array: EXPLODE

	$natal = "21/12/1990";
	var_dump(explode("/", $natal));












