# Importar a biblioteca flask e renderizar template
from flask import Flask, render_template    


app = Flask(__name__)       #__name__ = parâmetro

@app.route('/')             #criar a rota principal
def principal():            # Primeiro cria a rota e depois a função que vai processar aquela rota
    return render_template('index.html')

@app.route('/sobre')
def sobre():
    return render_template('about.html')
