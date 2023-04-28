<!doctype html>
<html>
<head>
<meta charset="utf-8">
<link rel="stylesheet" href="../css/bootstrap.css">
<title>Documento sem título</title>
</head>
<?php
$retorno_host = 'localhost'; // Local da base de dados MySql
$retorno_database = 'loja'; // Nome da base de dados MySql
$retorno_usuario = 'elbertjean'; // Usuario com acesso a base de dados MySql
$retorno_senha = 'Dgs589*-+';  // Senha de acesso a base de dados MySql

$nome = $_POST['NOME'];

if($nome!=""){
    $lnk = mysqli_connect($retorno_host, $retorno_usuario, $retorno_senha) or die ('Nao foi possível conectar ao MySql: ' . mysqli_error());
    mysqli_select_db($retorno_database, $lnk) or die ('Nao foi possível ao banco de dados selecionado no MySql: ' . mysqli_error());  

    $sql1 = "SELECT p_nome from produtos where locate('$nome',nome)>0 order by nome asc";
    $query = mysqli_query($sql1) or die(mysqli_error());

    if(@mysqli_num_rows($query) > 0){ // Verifico se o SQL retornou algum registro
?>
Encontrado registros com <?php echo $nome ?>:
<br><br>
<?php
        while($dados = mysqli_fetch_array($query)){ //loop para exibir na página os registros que foram encontrados
?>
<strong>Nome:</strong> <?php echo $dados['nome']?>
<br>
<?php
        }
        echo "<br>";
    }else{
?>
Nada encontrado com <?php echo $nome ?>
<br><br>
<?php
    }
    mysqli_close($lnk);
}
?>
<body>
<form method="post" action="teste.php">
    <div class="col-lg-3">
        <div class="form-group">
            <label for="NOME">Nome: </label>
            <input class="form-control" id="NOME" placeholder="Nome do colaborador" name="NOME">
        </div>
    </div>
    <button type="submit" class="btn btn-primary" style="margin-top: 24;">Buscar</button>
</form>
</body>
</html>