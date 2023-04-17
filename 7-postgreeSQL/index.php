<?
    if (isset($_POST['submit']))
    {
        print_r($_POST['nome']);
        print_r($_POST['email']);
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="./formulario.php" method ="POST>
        <label for="nome">Nome Completo</label>
        <input type="text" name="nome" id="nome"><br>
        <label for="email">Email</label>
        <input type="text" name="email" id="email"><br>
        <button type="submit">Enviar</button>
    </form>
</body>
</html>