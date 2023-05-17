<?php

require_once './autoload.php';

use src\Modelo\Endereco;
use src\Modelo\Conta\Titular;
use src\Modelo\Conta\Conta;
use src\Modelo\CPF;

$endereco = new Endereco(cidade:'São José dos Campos', bairro:'Campos de São José', rua:'Orlandino de Freitas', numero:'112');
$vinicius = new Titular(new CPF('123.456.789-10'), 'Vinicius Dias', $endereco);
$primeiraConta = new Conta($vinicius);
$primeiraConta->deposita(500);
$primeiraConta->saca(300); // isso é ok

echo $primeiraConta->recuperaNomeTitular() . "\n";
echo $primeiraConta->recuperaCpfTitular() . "\n";
echo $primeiraConta->recuperaSaldo() . "\n";
var_dump($primeiraConta);

$patricia = new Titular (new CPF('698.549.548-10'), 'Patricia', $endereco);
$segundaConta = new Conta($patricia);

$outroEndereco = new Endereco(cidade:'São José dos Campos', bairro:'Campos de São José', rua:'Orlandino de Freitas', numero:'126');
$outra = new Conta(new Titular(new CPF('123.654.789-01'), 'Abcdefg', $outroEndereco));
unset($segundaConta);
echo Conta::recuperaNumeroDeContas();
