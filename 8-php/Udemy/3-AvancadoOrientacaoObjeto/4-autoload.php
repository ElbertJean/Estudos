<?php

	function Autoload($nomeClasse){
		require_once("./4-load" . $nomeClasse . ".php");
	}

	spl_autoload_register("Autoload");

?>