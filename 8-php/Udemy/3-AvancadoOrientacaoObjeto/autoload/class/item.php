<?php

	class Item{
	//atributos da classe
	public $codigo;
	public $descricao;
	public $valor;

	function __construct($codigo,$descricao,$valor)
		{
			$this->codigo = $codigo;
			$this->descricao = $descricao;
			$this->valor = $valor;
			
		}
    }



?>