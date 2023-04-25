<?php

    require_once "./2-interfaceAluno.php";

    //implements -> Ele está inclementado uma interface
    class Aluno implements iAluno {

        //atribui nome do aluno
        function setNome($nome){
            $this->nome = $nome;
        }

        // retornar o nome do aluno
        function getNome (){
            return $this->nome;
        }
    }
?>