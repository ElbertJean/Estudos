<?php

namespace  src\Modelo\Conta;

use src\Modelo\Pessoa;
use src\Modelo\CPF;
use src\Modelo\Endereco;

class Titular extends Pessoa
{

    private $endereco;

    public function __construct(CPF $cpf, string $nome, Endereco $endereco)
    {
        parent::__construct($nome, $cpf);
        $this->endereco = $endereco;
    }

    public function recuperaEndereco () : Endereco {
        return $this -> endereco;
    }
}
