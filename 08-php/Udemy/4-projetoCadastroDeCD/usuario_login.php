<?php 

    require_once "./header.php";
    $pdo = Conect::getInstance();

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
        <h1 style="text-align:center; margin-top:50px">Cadastro de usuário</h1>
        <div class="container">
            <center>
            <div id="login">
                <form action="./cadastrar_usuario_login.php" method="POST" class="formulario">
                    <div class="">
                        <label style="margin-top:20px">Nome Completo</label>
                        <input type="text" name="nome" class="form-control" style="width: 300px; height 10px; margin:auto" required="">
                        
                        <label style="margin-top:20px">E-mail</label>
                        <input type="email" name="email" class="form-control" style="width: 300px; height 10px; margin:auto" required>
                        
                        <label style="margin-top:20px">Usuário</label>
                        <input type="text" name="usuario" class="form-control" style="width: 300px; height 10px; margin:auto" required="">
                        
                        <label style="margin-top:20px">Senha</label>
                        <input type="password" name="senha" class="form-control" style="width: 300px; height 10px; margin:auto" required>
                        
                        <input type="submit" name="cadastro_usuario" value="Cadastrar "class="btn btn-primary btn-block" style="width: 150px; height 10px; margin:auto; margin-top:20px">
                    </div>
                </form>
            </div>
        </div>
    </body>
</html>