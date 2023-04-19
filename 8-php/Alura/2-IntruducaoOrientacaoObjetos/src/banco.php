<?php

require_once './Conta.php';
require_once './Titular.php';
require_once './CPF.php';

$elbert = new Titular(new CPF("442.531.798-00") , "Elbert Jean dos Santos");
$primeiraConta = new Conta ($elbert);
$primeiraConta -> depositar (500);
$primeiraConta -> sacar (300);

echo $primeiraConta->recuperaNomeTitular() . PHP_EOL;
echo $primeiraConta->recuperaCpfTitular() . PHP_EOL;
echo $primeiraConta->recuperaSaldo() . PHP_EOL;

$jean = new Titular(new CPF("442.531.798-77") , "Jean Carlos");
$segundaConta = new Conta ($jean);
$segundaConta -> depositar (5000);
$segundaConta -> sacar (3000);

$teste = new Conta (new Titular (new CPF("442.531.798-00") ,  "Adriano"));

echo Conta::recuperaNumeroDeContas();