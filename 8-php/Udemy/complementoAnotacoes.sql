/** scripts das aulas 2º parte - RCTI Treinamentos **/
/** operadores relacionais

=	igual 
< menor que
<= menor ou igual a
> maior que
>= maior ou igual a
<> diferente
**/

select * from produtos where p_id > 3;
select p_nome, p_genero from produtos where p_id <> 5;
/** Opeadores logicos 
OR ou
AND e
NOT não/negação
**/
select p_nome, p_genero from produtos where p_id > 2 and p_genero = 'pop';
select * from produtos where p_id = 3 or p_id = 7;
select p_nome, p_autor from produtos where not (p_id < 10);
select p_nome, p_autor from produtos where not (p_id < 10) and p_genero <> 'rock';

/** operadores especiais 
IS NULL, IS NOT NULL, BETWEEN, LIKE, IN
**/
select p_nome, p_autor
from produtos
where p_data is null;

select * from produtos
where p_data is not null;

select p_nome, p_autor, p_genero
from produtos
where p_data between '2001-01-01' and '2005-01-01';

select p_nome, p_autor, p_genero
from produtos
where p_data not between '2001-01-01' and '2005-01-01';

/** usando o tipo float **/
alter table produto add p_valor float(10,2) default 0;
update produtos set p_valor = 20.99 where p_id = 1;

/** Operador LIKE
LIKE 'A%' = todas as palavras que iniciam com a letra A
LIKE '%A' = Todas as palavras que terminam com a letra A
LIKE '%A%' = todas que tenham a letra A em qualquer posição
LIKE 'A_' = Texto de dois caracter que começam com A e o outro seja qualquer um
LIKE '_A' = Texto de dois caracter onde o primeiro seja qualquer um e o segundo A
LIKE '_A_' = Texto de três caracter cuja segunda letra seja A
LIKE '%A_' = Todas que tenham a letra A na penultima posição
LIKE '_A%' = TOdas que tenham a letra A na segunda posição
**/
select * from podutos where p_valor like '20%';
select * from produtos where p_valor like '%95';
select * from produtos where p_autor like '%a%';

/* o uso do Operador IN pode substituir o OR */
select * from produtos where p_id in (1,4,7);

/** criando a tabela MUSICA: **/
create table musica(m_id integer not null auto_increment, m_faixa integer,
m_nome varchar(200) not null, m_autor varchar(100) not null, m_album integer not null,
m_data_in timestamp default current_timestamp, primary key(m_id),
foreign key (m_album) references produtos (p_id) );

/** Unindo tabelas **/

select produtos.p_id, produtos.p_nome, musica.m_nome, musica.m_autor
from produtos, musica;

select produtos.p_nome, produtos.p_autor, musica.m_nome, musica.m_autor
from produtos, musica
where produtos.p_id = musica.m_album;

select A.p_nome, A.p_autor, B.m_nome, B.m_autor
from produtos join musica
on A.p_id = B.m_album;

select A.p_nome, A.p_genero, B.m_nome, B.m_autor
from produtos A left outer join musica B
on (A.p_id = B.m_album);

select A.p_nome, A.p_genero, B.m_nome, B.m_autor
from produtos A right outer join musica B
on (A.p_id = B.m_album);