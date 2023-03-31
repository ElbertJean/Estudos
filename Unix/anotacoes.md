# COMANDOS NO SHELL

<strong>pwm</strong>Mostra em qual diretório está<br>
<strong>cd pasta</strong> Abre uma pasta
<strong>./</strong> Pasta atual
<strong>../</strong> Pasta anterior
<strong>ls</strong> Lista um diretório 
<strong>ll</strong> Lista um diretório por completo
<strong>touch nome.extensão</strong> Cria um arquivo
<strong>mkdir pasta</strong> Cria uma pasta
<strong>rm -rf nomeArquivo</strong> Exclui um arquivo
<strong>echo</strong> Imprimir um arquivo
<strong>cat</strong> Concatena um arquivo
<strong>mv</strong> Move arquivos
<strong>grep 'letra/palavra'</strong> Procura uma palavra determinada em um arquivo
<strong>></strong> Maior que = Escreve a saída do programa para dentro do arquivo
<b>Exemplo:</b> cat > texto.txt
<strong>>></strong> Maior Maior que = Não sobrescreve o arquivo, mas adiciona a saída do programa ao final dele.
<b>Exemplo:</b> cat >> texto.txt
<strong><</strong> Executa o programa utilizando o conteúdo de um arquivo.
<b>Exemplo:</b> grep 'teste' < texto.txt
<strong>|</strong> Inicia um programa ao termino de outro
<b>Exemplo:</b> programa1 | programa2
<strong>;</strong> Lê o próximo comando na mesma linha
<strong>&</strong> Não espera o último comando finalizar para iniciar o próximo
<strong>&&</strong> Só executa o segundo comando caso o primeiro tenha funcionado
<strong>||</strong> Só executa o segundo comando caso o primeiro tenha falhado
<strong>if</strong> "Se"
<strong>while</strong> "Até"
<strong>for</strong> "Enquanto"
<strong>case</strong> "Caso X", senão X
