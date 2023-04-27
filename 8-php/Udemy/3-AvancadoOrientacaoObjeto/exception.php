<?php

/*
    getMessage() -> retorna uma mensagem de erro
    getCode() -> retorna o código de erro
    getFile() -> retorna o arquivo fonte de onde ocorreu o erro
    getLine() -> retorna a linha onde ocorreu o erro
    getTrace() -> retorna uma array até onde ocorreu o erro
    getTraceAsString() -> retorna as ações em forma de strings
    try {} catch(){}
*/

    $nome = null;

    try{
        if(!$nome){
            throw new Exception("<br>Erro encontrado na variável $nome", 1);
            
        }
    } catch(Exception $a) {
        echo $a->getFile() . "<br>";
        echo $a->getMessage() . "<br>";
        echo $a->getLine() . "<br>";
    }

?>