<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Formulário Simples</title>
</head>
<body>
    <form action="dados.php" method="GET">
        Nome: <input type="text" name="nome">
        E-mail: <input type="email" name="email">
        <button type="submit">Enviar</button><br>

        <a href="dados.php?idade=25&sobrenome=Jean">Enviar dados</a>
    </form>
</body>
</html>