import urllib.request, json     # Utilizado para fazer a requisição da API. Retorno da requisição em JSON (por isso importando JSON)

url = "https://api.themoviedb.org/3/discover/movie?sort_by=populary.desc&api_key=e2ac79a96b592f729aad94c456a795df"

resposta = urllib.request.urlopen(url)

dados = resposta.read()

jsondata = json.loads(dados)

print(jsondata['results'])