<?php 

    require_once './header.php';
    $pdo = Conect::getInstance();

    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $usuario = $_POST['usuario'];
    $senha = $_POST['senha'];

?>

    <body>
        <div class="container">
            
            <?php

                try {
                    $sql = ('INSERT INTO usuarios (us_nome, us_email, us_user, us_senha)
                        VALUES
                        (:nome, :email, :usuario, :senha)
                    ');

                    $statement = $pdo->prepare($sql);
                    $statement->bindParam(':nome', $nome, PDO::PARAM_STR);
                    $statement->bindParam(':email', $email, PDO::PARAM_STR);
                    $statement->bindParam(':usuario', $usuario, PDO::PARAM_STR);
                    $statement->bindParam(':senha', $senha, PDO::PARAM_STR);
                    $statement->execute();

                    echo '<h5 class="alert alert-success">Usuário cadastrado com sucesso</h5>'; 
                    echo '<a href="./index.php" class="btn btn-primary">Voltar para Home</a>';
                } catch (PDOException $e){
                    echo "Erro" . $e->getMessage();
                }
                
            ?>

        </div>
    </body>