# Importar a biblioteca flask e renderizar template
from flask import Flask, render_template, request

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
