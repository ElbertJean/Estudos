<?php

    require_once "./header.php";
    $pdo = Conect::getInstance();
    $id = $_GET['id'];

?>

    <body>
        <div class="container">

            <?php

                try {
                    $sql = ('DELETE FROM produtos WHERE p_id = :id');

                    $statement = $pdo->prepare($sql);
                    $statement->bindParam(':id', $id, PDO::PARAM_STR);
                    $statement->execute();

                    echo '<hr>';
                    echo '<h4 class="alert alert-success">O item foi deletado com sucesso.</h4>';
                    echo '<a href="./home.php" class="btn btn-primary">Voltar para Home</a>';
                } catch (PDOExecption $e) {
                    echo 'Houve um erro: ' . $e->getMessage();
                }
        
            ?>
        </div>
    </body>
</html>