<?php 

    require_once "./conexao.php";
    $pdo = Conect::getInstance();


?>
<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="../css/bootstrap.css">
        <title>Bert Mercearia</title>
    </head>
    <nav style="margin-top:20px">
        <ul class="nav nav-pills">
            <li class="nav-item">
                <a class="nav-link" href="./home.php"><b>Bert Mercearia</b></a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" style="margin-right:10px; margin-left:10px" href="./home.php"><b>Home</b></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" style="margin-right:10px" href="#"><b>Cadastrar produto</b></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" style="margin-right:10px" href="#"><b>Sair</b></a>
            </li>
        </ul>
    </nav>
    <hr>
    <body>
        <div class="container">
            <h1>Bert Mercearia</h1><br><br>
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
                            Descrição
                        </th>
                        <th>
                            Preço
                        </th>
                        <th>
                            Quantidade em estoque
                        </th>
                    </tr>
                    <?php   

                        $sql = ('SELECT cod_produto, nome_produto, descricao, preco, qtde_estoque FROM produtos'); //prepara a consulta
                        $statement = $pdo->prepare($sql); //prepara os dados coletados do sql
                        $statement->execute(); //executa os dados coletados
                        
                        $produtos = $statement->fetchAll(PDO::FETCH_ASSOC); //extrair todos os dados e armazena o resultado na variável

                        foreach ($produtos as $value) {
                            echo "<tr>";
                            echo "<td>" . $value['cod_produto'] . "</td>";
                            echo "<td>" . $value['nome_produto'] . "</td>";
                            echo "<td>" . $value['descricao'] . "</td>";
                            echo "<td>" . $value['preco'] . '</td>';
                            echo "<td style=\"text-align:center\">"  . $value['qtde_estoque'] . "</td>";
                           echo '<td><a href="./editar.php?id=' . $value['cod_produto'] . '">Editar</a><td>';
                            echo "</tr>";
                        }
                    ?>
                </table>
            </div>

        </div>
    </body>
</html>