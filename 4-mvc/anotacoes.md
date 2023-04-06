MVC ( MODEL, VIEW, CONTROLER )<br><br>

MVC -> Facilita a troca de informações entre a interface do usuário aos dados no banco, fazendo com que as respostas sejam mais rápidas e dinâmicas.<br><br>

-> 1. VIÃO GERAL<br>
	MODEL: Coração da aplicação ( cadama que liga ao banco de dados )<br>
		- Regras de negócio<br>
		- Endidades<br>
		- Cadama de acesso à dados<br><br>
	
	VIEW: Responsável por renderizar a resposta (responsável por renderizar a página com resposta/requisição).<br>
	Tudo que desrespeita a visualização está relacionado com a camada View.<br>
		- HTML<br>
		- CSS<br>
		- JS<br>
		- Template Engine<br><br>	
	
	CONTROLER: Faz o intermédio de todo o fluxo desde de: pedir para o model informações da base de dados já que <br>
	ele detem essa lógica/dados. Ele pega essas informações, trabalha e joga na View para ser renderizada.<br><br>
	
	Exemplo de MVC:
	Um entregador necessita entregar uma carta para uma pessoa que trabalha em um prédio (prédio seria a estrutura MVC), <br>
	chegando nesse prédio, ele encontra uma recepcionista que o recebe, coleta as informações da entrega e então, ela <br>
	vai atrás da pessoa para entregar a carta e trazer a assinatura da pessoa. Essa ida até essa pessoa para entregar a <br>
	carta e a volta para entregar a assinatura da pessoa para o entregador, seria o Controler (ela faz o intermédio das<br>
	informações, leva e trás a informação).<br><br>
	
	BROWSER -> WEB SERVER -> APLICAÇÃO -> CONTROLLER <br>
	BROWSER - Gera uma requisição a partir de uma URL, essa requisição vai bater no Web Server<br>
	WEB SERVER - Pode ser um tomcat, apache, vai depender da tecnologia que está utilizando. Pelo Web Server, ele vai direcionar <br>
	para a aplicação.<br>
	Aplicação - Dentro da aplicação, o framework vai saber para onde redirecionar.<br>
	Controller - A primeira camada a receber a informação.<br><br>
	
	Exemplo sem precisar acessar o banco de dados:<br>
	BROWSER -> REQUISIÇÃO -> CONTROLLER -> ACESSAR AO SERVIDOR -> ENCAMINHA VIEW -> RECEBE VIEW RESPOSTA -> RENDERIZA PÁGINA<br>
	O BROWSER vai gerar uma requisição que vai chegar até o Controller (que no caso é o servidor), o Controller vai encaminhar<br>
	essa requisição para a VIEW que vai enviar resposta e renderizar no Browser.<br><br>
	
	Exemplo precisando acessar o banco de dados:<br>
	BROWSER -> REQUISIÇÃO -> CONTROLLER -> ACESSAR AO SERVIDOR -> ACESSA O MODEL PARA OBTER INFORMAÇÕES DE DB -> PEGA <br>
	ESSAS INFORMAÇÕES E VOLTA PARA O CONTROLLER -> ENCAMINHA VIEW -> RECEBE VIEW RESPOSTA -> RENDERIZA PÁGINA<br>
	O BROWSER vai gerar uma requisição que vai chegar até o Controller (que no caso é o servidor), o Controller verificando que <br>
	precisa acessar db, ele vai acessar as informações do db no MODEL, pegar essas informações e trazer de volta para o Controler, <br>
	feito isso, ele encaminhar essa requisição para a VIEW que vai enviar resposta e renderizar no Browser.<br>
