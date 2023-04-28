<?php

    require_once "./autoload.php";
    session_start();
    
    if(isset($_GET['logout'])):
        if($_GET['logout'] == 'confirmar'):
            Login::deslogar();
        endif;
    endif;
    

    if(isset($_SESSION['logado'])):
?>

<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="./css/bootstrap.css">
        <title>Loja de CD</title>
    </head>
    <nav style="margin-top:20px">
        <ul class="nav nav-pills">
            <li class="nav-item">
                <a class="nav-link" href="./home.php"><b>LOJA DE CD</b></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" style="color:black; font-weight:bold"><b>Bem vindo <?php  echo $_SESSION['usuarios'];?></b></a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" style="margin-right:10px; margin-left:10px" href="./home.php"><b>Home</b></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" style="margin-right:10px" href="./cadastrar.php"><b>Cadastrar</b></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" style="margin-right:10px" href="./home.php?logout=confirmar"><b>Sair</b></a>
            </li>
        </ul>
    </nav>
    <hr>
<?php 

    else:
        echo '<center><h3 style="margin-top:300px; font-size:30px">Acesso negado!</h3></center>';
        echo '<div style="padding:10px 12px; width:150px; background-color:#DB4A2E; text-align:center; border-radius:5px; margin:auto;">';
        echo '<a href="./index.php" style="color:black; font-weight: 500; font-size:18px; text-decoration:none">Fazer login</a>';
        echo '</div>';    
            exit();
    endif;
?>

