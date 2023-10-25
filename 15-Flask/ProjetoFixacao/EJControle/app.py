from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy 

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///cursos.sqlite3"

db = SQLAlchemy(app)

class cursos(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(50))
    entrada = db.Column(db.String(20))
    saida = db.Column(db.String(20))
    produto = db.Column(db.String(100))
    descricao = db.Column(db.String(200))
    preco = db.Column(db.Integer)

    def __init__(self, nome, entrada, saida, produto, descricao, preco):
        self.nome = nome
        self.entrada = entrada
        self.saida = saida
        self.produto = produto
        self.descricao = descricao
        self.preco = preco

@app.route('/', methods=['GET', 'POST'])
def home():
    return render_template('/home/home.html', servicos=cursos.query.all())

@app.route('/adicionar_servico', methods=['GET', 'POST'])
def adicionar_servico():
    nome = request.form.get('nome')
    entrada = request.form.get('entrada') 
    saida = request.form.get('saida')
    produto = request.form.get('produto')
    descricao = request.form.get('descricao') 
    preco = request.form.get('preco')

    if request.method == 'POST':
        adicionarServico = cursos(nome, entrada, saida, produto, descricao, preco)
        db.session.add(adicionarServico)
        db.session.commit()
        return redirect(url_for('home'))
    return render_template('/home/adicionar_servico.html')

with app.app_context():
    db.create_all()

if __name__ == "__main__":
    app.run(debug=True)