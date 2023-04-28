<?php

    require_once "./header.php";
    $pdo = Conect::getInstance();
    $id = $_GET['id'];

?>

    <body>
        <div class="container">
            <h2>Informações do Album:</h2>
            <p><hr></p>

            <form action="#" method="POST">

                <?php 
                
                    $sql = ('SELECT p_id, p_nome, p_autor, 
                    p_tipo, p_genero, p_data, p_gravadora, p_preco
                    FROM produtos 
                    WHERE p_id = :id');
                    
                    $statement = $pdo->prepare($sql);
                    $statement->bindParam(':id', $id, PDO::PARAM_STR); // blinda os dados 
                    $statement->execute();

                    $produtos = $statement->fetchAll(PDO::FETCH_ASSOC); //extrair todos os dados e armazena o resultado na variável
                
                    foreach($produtos as $key => $value) {

                        $id_alb = $value['p_id'];

                        echo    '<label>Nome:</label> 
                                <input type="text" name="nome" class="form-control"
                                value=" ' . $value['p_nome'] . '" required>';
                        echo    '<label>Autor:</label> 
                                <input type="text" name="autor" class="form-control"
                                value=" ' . $value['p_autor'] . '" required>';

                                    if ($value['p_tipo'] == 1) {
                                            $tipo = 'CD';
                                    } else {
                                        $tipo = 'DVD';
                                    }
                        echo    '<label>Tipo</label> 
                                <input type="text" name="tipo" class="form-control"
                                value=" ' . $tipo . '" required>';

                        echo    '<label>Gênero:</label> 
                                <input type="text" name="genero" class="form-control"
                                value=" ' . $value['p_genero'] . '" required>';

                        echo    '<label>Data:</label> 
                                <input type="text" name="data" class="form-control"
                                value=" ' . $value['p_data'] . '" disabled>';

                        echo    '<label>Gravadora:</label> 
                                <input type="text" name="gravadora" class="form-control"
                                value=" ' . $value['p_gravadora'] . '">';

                        echo    '<label>Preço:</label> 
                                <input type="text" name="preco" class="form-control"
                                value=" ' . $value['p_preco'] . '">';
                        
                        echo    '<input type="submit" name="botao" href="./home.php" class="btn btn-primary" value="Alterar"> &nbsp';
                        echo    '<a href="./excluir.php?id=' . $id . ' "class=btn btn-danger"> Excluir </a>';

                    }

                    echo "</form>";

                    if (isset($_POST['botao'])) {
                        $nome = $_POST['nome'];
                        $autor = $_POST['autor'];
                        $genero = $_POST['genero'];
                        $gravadora = $_POST['gravadora'];
                        $preco = $_POST['preco'];
                    
                        try {
                            $sql = ('UPDATE produtos SET p_nome = :nome, p_autor = :autor, p_genero = :genero, p_gravadora = :gravadora, p_preco = :preco WHERE p_id = :id_alb');
                            $statement = $pdo->prepare($sql);
                            $statement->bindParam(':nome', $nome, PDO::PARAM_STR); // blinda os dados 
                            $statement->bindParam(':autor', $autor, PDO::PARAM_STR); // blinda os dados 
                            $statement->bindParam(':genero', $genero, PDO::PARAM_STR); // blinda os dados 
                            $statement->bindParam(':gravadora', $gravadora, PDO::PARAM_STR); // blinda os dados 
                            $statement->bindParam(':preco', $preco, PDO::PARAM_STR); // blinda os dados 
                            $statement->bindParam(':id_alb', $id_alb, PDO::PARAM_STR); // blinda os dados 
                            $statement->execute();
                            
                            echo '<h4 class="alert alert-sucess" style="margin-top:30px">Item atualizado com sucesso</h4>';
                            echo '<a href="./home.php" class="btn btn-primary">Voltar para home</a>';
                        } catch (PDOException $e){
                            echo 'Erro ao atualizar os dados' . $e->getMessage();
                        }
                    } 
                ?>
            <hr>

        </div>
    </body>
</html>