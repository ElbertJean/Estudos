# Importar a biblioteca flask e renderizar template
from flask import Flask, render_template, request
import urllib.request, json     # Utilizado para fazer a requisição da API. Retorno da requisição em JSON (por isso importando JSON)

app = Flask(__name__)       #__name__ = parâmetro 

frutas = []
registros = []

@app.route('/', methods=['GET', 'POST'])             #criar a rota principal
def principal():            # Primeiro cria a rota e depois a função que vai processar aquela rota
    # frutas = ['Maçã', 'Banana', 'Uva', 'Pêra', 'Morango', 'Mamão']
    if request.method == 'POST':
        if request.form.get("fruta"):       #Campo foi digitado?
            frutas.append(request.form.get("fruta"))
    return render_template('index.html', frutas=frutas)

@app.route('/sobre', methods=['GET', 'POST'])
def sobre():
    # notas = {"Elbert": 10, "João": '5', "Aron": 7, "Ludmila": 8}
    if request.method == 'POST':
        if request.form.get("aluno") and request.form.get('nota'):
            registros.append({"aluno": request.form.get('aluno'),"nota" : request.form.get('nota')})
    return render_template('sobre.html', registros=registros)

@app.route('/filmes/<propriedade>')     #espera uma propriedade para deixar a rota dinâmica
def filmes(propriedade):

    if propriedade == 'populares':
        url = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=e2ac79a96b592f729aad94c456a795df"
    elif propriedade == 'melhores':
        url = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=e2ac79a96b592f729aad94c456a795df"
    elif propriedade == 'kids':
        url= "https://api.themoviedb.org/3/search/movie?query=kids&include_adult=false&language=en-US&page=1&api_key=e2ac79a96b592f729aad94c456a795df"
    elif propriedade == 'breve':
        url = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=e2ac79a96b592f729aad94c456a795df"

    resposta = urllib.request.urlopen(url)
    dados = resposta.read()
    jsondata = json.loads(dados)

    return render_template('filmes.html', filmes=jsondata['results'])

if __name__ == "__main__":
    app.run(debug=True)