<?php

$mult = 3;
for ($i=0; $i <=10 ; $i++) { 
    echo "$mult x $i : " . $mult * $i . "\n"; 
}

echo "\n";

for ($tabuada=0; $tabuada<=10; $tabuada++) { 
    for ($multiplicador=0; $multiplicador <=10 ; $multiplicador++) { 
        echo "$tabuada x $multiplicador : " . $multiplicador * $tabuada . "\n";
    }
    echo "\n";
}