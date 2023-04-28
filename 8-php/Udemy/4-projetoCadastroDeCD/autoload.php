<?php

	function autoload($nomeClasse){
		require_once("./classes/" . strtolower($nomeClasse) . ".class.php");
	}

	spl_autoload_register("autoload");

?>
