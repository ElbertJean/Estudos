<?php
    $link = mysqli_connect('localhost', 'elbertjean', 'Dgs589*-+', 'loja');
    if (!$link) {
        die('Could not connect: ' . mysqli_error());
    }
    echo 'Connected successfully';
    mysqli_close($link);

    //REVER ESSE CÓDIGO - NÃO FUNCIONOU
?>