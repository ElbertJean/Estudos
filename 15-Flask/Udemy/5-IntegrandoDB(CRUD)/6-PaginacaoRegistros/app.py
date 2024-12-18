# Importar a biblioteca flask e renderizar template
from flask import Flask, render_template, request, redirect, url_for
import urllib.request, json     # Utilizado para fazer a requisição da API. Retorno da requisição em JSON (por isso importando JSON)
from flask_sqlalchemy import SQLAlchemy     #Importar a biblioteca ORM (Mapeamento objeto relacional)

app = Flask(__name__)       #__name__ = parâmetro

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///cursos.sqlite3"

db = SQLAlchemy(app)

frutas = []
registros = []

class cursos(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(50))
    descricao = db.Column(db.String(100))
    ch = db.Column(db.Integer)

    def __init__(self, nome, descricao, ch):
        self.nome = nome
        self.descricao = descricao
        self.ch = ch

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

@app.route('/cursos')
def lista_cursos():
    page = request.args.get('page', 1, type=int)
    per_page = 5
    todos_cursos = cursos.query.paginate(page=page, per_page=per_page)
    return render_template('cursos.html', cursos=todos_cursos)     #Faz um select * from 

@app.route('/cria_curso', methods=['GET', 'POST'])
def cria_curso():
    nome = request.form.get('nome')     #Pega o campo nome no input
    descricao = request.form.get('descricao') 
    ch = request.form.get('ch')

    if request.method == 'POST':
        adicionarCurso = cursos(nome, descricao, ch)
        db.session.add(adicionarCurso)
        db.session.commit()
        return redirect(url_for('lista_cursos'))
    return render_template('novoCurso.html')

@app.route('/<int:id>/atualizar_curso', methods=['GET', 'POST'])     #Passar o ID como ref
def atualizar_curso(id):
    curso = cursos.query.filter_by(id=id).first()       #Realiza a filtragem do id e pega apenas o indicado por parametro
    if request.method == 'POST':
        nome = request.form["nome"]
        descricao = request.form["descricao"]
        
        ch = request.form["ch"]
        cursos.query.filter_by(id=id).update({"nome": nome, "descricao": descricao, "ch":ch})
        db.session.commit()
        return redirect(url_for('lista_cursos'))
    return render_template('atualizarCurso.html', curso=curso)

@app.route('/<int:id>/deletar_curso')
def deletar_curso(id):
    curso = cursos.query.filter_by(id=id).first()
    db.session.delete(curso)
    db.session.commit()
    return redirect(url_for('lista_cursos'))

with app.app_context():
    db.create_all()

if __name__ == "__main__":
    app.run(debug=True)