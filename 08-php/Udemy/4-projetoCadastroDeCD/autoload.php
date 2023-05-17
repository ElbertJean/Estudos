<?php

	function autoload($nomeClasse){
		require_once("./class/" . strtolower($nomeClasse) . ".class.php");
	}

	spl_autoload_register("autoload");

?>
