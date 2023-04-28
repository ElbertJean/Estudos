<?php 

    require_once "./header.php";
    $pdo = Conect::getInstance();


?>

    <body>
        <div class="container">
            <h1>Loja de CD's </h1><br><br>
            <div class="col-sm-12">
                <table class="table">
                    <tr>
                        <th>
                            ID
                        </th>
                        <th>
                            Nome
                        </th>
                        <th>
                            Artista
                        </th>
                        <th>
                            Tipo
                        </th>
                        <th>
                            Gênero
                        </th>
                        <th>
                            Data
                        </th>
                        <th>
                            Gravadora
                        </th>
                        <th>
                            Preço
                        </th>
                        <th>
                            Editar
                        </th>
                    </tr>
                    <?php   

                        $sql = ('SELECT p_id, p_nome, p_autor, p_tipo, p_genero, p_data, p_gravadora, p_preco FROM produtos'); //prepara a consulta
                        $statement = $pdo->prepare($sql); //prepara os dados coletados do sql
                        $statement->execute(); //executa os dados coletados
                        
                        $produtos = $statement->fetchAll(PDO::FETCH_ASSOC); //extrair todos os dados e armazena o resultado na variável

                        foreach ($produtos as $value) {
                            echo "<tr>";
                            echo "<td>" . $value['p_id'] . "</td>";
                            echo "<td>" . $value['p_nome'] . "</td>";
                            echo "<td>" . $value['p_autor'] . "</td>";
                                if ($value['p_tipo'] == 1) {
                                    $tipo = 'CD';
                                } else {
                                    $tipo = 'DVD';
                                }
                            echo '<td>' . $tipo . '</td>';
                            echo "<td>" . $value['p_genero'] . "</td>";
                            echo "<td>" . date('d/m/Y', strtotime($value['p_data'])) . "</td>";
                            echo "<td>" . $value['p_gravadora'] . "</td>";
                            echo "<td> R$ " . $value['p_preco'] . "</td>";
                            echo '<td><a href="./editar.php?id=' . $value['p_id'] . '">Editar</a><td>';
                            echo "</tr>";
                        }
                    ?>
                </table>
            </div>

        </div>
    </body>
</html>