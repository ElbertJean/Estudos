<?php

    require_once "./header.php";
    $pdo = Conect::getInstance();

    $nome = $_POST['nome'];
    $artista = $_POST['artista'];
    $genero = $_POST['genero'];
    $gravadora = $_POST['gravadora'];
    $preco = $_POST['preco'];
    $data = date('Y-m-d');

    if(isset($_POST['tipo']) == 'CD') {
        $tipo = 1;
    } else {
        $tipo =2;
    }

?>

    <body>
        <div class="container">

            <?php 
                
                try{
                    $sql = ('INSERT INTO produtos (p_nome, p_autor, 
                        p_tipo, p_genero, p_data, p_gravadora, p_preco) 
                        VALUES
                        (:nome, :artista, :tipo, :genero, :data, 
                        :gravadora, :preco)');
                    
                    $statement = $pdo->prepare($sql);
                    $statement->bindParam(':nome', $nome, PDO::PARAM_STR); // blinda os dados 
                    $statement->bindParam(':artista', $artista, PDO::PARAM_STR); // blinda os dados 
                    $statement->bindParam(':tipo', $tipo, PDO::PARAM_STR); // blinda os dados 
                    $statement->bindParam(':genero', $genero, PDO::PARAM_STR); // blinda os dados 
                    $statement->bindParam(':data', $data, PDO::PARAM_STR); // blinda os dados 
                    $statement->bindParam(':gravadora', $gravadora, PDO::PARAM_STR); // blinda os dados 
                    $statement->bindParam(':preco', $preco, PDO::PARAM_STR); // blinda os dados 
                    $statement->execute();

                    echo '<h5 class="alert alert-success">Item cadastrado com sucesso</h5>'; 
                    echo '<a href="./home.php" class="btn btn-primary">Voltar para Home</a>';
                } catch (PDOException $e){
                    echo "Erro" . $e->getMessage();
                }

            ?>

        </div>
    </body>
</html>