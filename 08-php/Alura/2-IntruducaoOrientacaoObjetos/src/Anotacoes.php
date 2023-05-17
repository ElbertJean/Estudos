<?php

/* 
Class é a forma do bolo, planta da casa. É aonde fica o molde para o objeto ser criado
*/
class Instrumento {
    public $instrumento;
    public $modelo;
    public $quantidade;
}

//Primeiro cliente é o endereço onde as informações estão armazenadas
//new Instrumento () é o "bolo feito", é onde todas as informações da forma estão armazenadas.
$primeiroCliente = new Instrumento ();
$primeiroCliente -> instrumento = "Violão Gianinni";
$primeiroCliente -> modelo = "Memphis";
$primeiroCliente -> quantidade = 1;

$segundoCliente = new Instrumento ();
$segundoCliente -> instrumento = "Guitarra Ibanez";
$segundoCliente -> modelo = "Herman Li Signature";
$segundoCliente -> quantidade = 1;

print_r ($primeiroCliente);
print_r ($segundoCliente);