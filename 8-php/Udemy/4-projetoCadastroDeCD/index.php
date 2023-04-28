<?php 

    session_start();
    require_once './autoload.php';

    if (isset($_POST['ok'])): //ele foi clicado?
        $login = filter_input(INPUT_POST, 'login',FILTER_SANITIZE_ADD_SLASHES); //filtra o que está dentro do input
        $senha = filter_input(INPUT_POST, 'senha',FILTER_SANITIZE_ADD_SLASHES);//filtra o que está dentro do input
        
        $l = new Login;
        $l->setLogin($login);
        $l->setSenha($senha);

        if($l->logar()):             // metodo publico logar no nosso arquivo login.class.php
            header("location: ./screen/home.php");    // ele é como se fosse um require, mas diferente dele, o header direciona a pagina em questão
        else:
            $erro = '<b class="alert alert-danger">Usuário ou senha inválido</b>';
        endif;
    endif;

    if(isset($_SESSION['logado'])):  //verifica se o usuário já está logado
        header("location: ./home.php");
    else:
        

?>

<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./css/bootstrap.css">       
        <title>Cadastro de CDs</title>
    </head>
    
    <body>
        <h1 style="text-align:center"><img src="./img/loja.jpg" style="width:350px; border-radius: 15px; margin-top:100px; margin-bottom:20px"></h1>
        <div class="container">
            <center>
            <div id="login">
                <form action="" method="POST" class="formulario">
                    <div class="">
                        <label>Usuário</label>
                        <input type="text" name="login" class="form-control" style="width: 300px; height 10px; margin:auto" required="">
                        <label style="margin-top:20px">Senha</label>
                        <input type="password" name="senha" class="form-control" style="width: 300px; height 10px; margin:auto" required>
                        <input type="submit" name="ok" value="Logar "class="btn btn-primary btn-block" style="width: 150px; height 10px; margin:auto; margin-top:20px">
                    </div>
                </form>
                <?php echo isset($erro) ? $erro : ''; ?>
            </div>
        </div>
        <?php endif; ?>
    </body>
</html>