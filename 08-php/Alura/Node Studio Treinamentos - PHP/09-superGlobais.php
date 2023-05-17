<?php

/*
*****************SUPERGLOBAIS*****************
$GLOBALS => Conseguimos acessar as variaveis globais de qualquer parte do script.
$_SERVER => É um array contendo informação como cabeçalhos, paths, e localizações do script. 
As entradas neste array são criadas pelo servidor web.
$_POST =>
$_GET =>
$_FILES =>
$_ENV =>
$_REQUEST =>
$_COOKIE =>
$_SESSION =>

*****************GLOBALS*****************
$x  = 10;
$y = 15;

function soma(){
    echo $GLOBALS['x'] + $GLOBALS['y'];
}

soma();

*****************_SERVER*****************
echo $_SERVER['PHP_SELF'] . "\n";
echo $_SERVER['SCRIPT_FILENAME'];
echo $_SERVER['DOCUMENT_ROOT'];

*****************_REQUEST*****************


*****************_POST*****************


*****************_GET*****************


*****************_FILES*****************


*****************_ENV*****************


*****************_COOKIE*****************


*****************_SESSION*****************

*/
