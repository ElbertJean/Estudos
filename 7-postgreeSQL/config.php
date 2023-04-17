<? 

    $dbHost = 'localhost/pgadmin4';
    $dbUsername = 'elbertjeandossantos@gmail.com';
    $dbPassword = 'Dgs589*-+';
    $dbName = 'formulario';

    $mysqli = new mysqli ($dbHost, $dbUsername,$dbPassword, $dbName);

    if ($mysqli->connect_errno) {
        echo "Erro";
    } else {
        echo "Conexão efetuada com sucesso";
    }

    echo ($mysqli);

?>