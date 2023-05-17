<?php

spl_autoload_register(function ($nomeCompledoDaClasse) {
    $caminhoArquivo = str_replace('\\', DIRECTORY_SEPARATOR, $nomeCompledoDaClasse);
    $caminhoArquivo .= '.php';
    
    if(file_exists($caminhoArquivo)) {
        require_once $caminhoArquivo;
    }
});