<?php

	function Autoload($nomeClasse){
		require_once("./class/" . strtolower($nomeClasse) . ".php");
	}

	spl_autoload_register("Autoload");


    /*
    *** Realizar mais pesquisar sobre spl_autoload_register ***
    
    Ao fazer os testes na aplicação, a funcao Autoload converte a primeira 
    letra para maiúscula, fazendo assim com que o arquivo não seja 
        encontrado e dando erro.
        A mesma coisa para arquivos com nomes multiplos (autoloadItem), o autoload
        não reconhece o nome do arquivo e capta apenas o nome do Item que a primeira
        letra está em maiúsculo.
        Um modo de resolver esse problema foi utilizando o strtolower na variável
        para deixá-la minúscula.


    */
?>

