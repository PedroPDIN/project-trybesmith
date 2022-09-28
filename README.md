# TrybeSmith

### Tem como finalidade criar uma loja de itens medievais, no formato de uma API, utilizando Typescript.

<details>
  <summary>Informações</summary>
  <br />
  <p>
    O projeto possui camadas da aplicação (Models, Service e Controllers) no código e, por meio dessa aplicação, será possível realizar as operações básicas que se pode fazer em um determinado banco de dados: Criação, Leitura, Atualização e Exclusão (ou CRUD, para as pessoas mais íntimas stuck_out_tongue_winking_eye - Create, Read, Update e Delete).
  </p>
  <strong>IMPORTANTE: a criação dos endpoints foi utilizando MySQL.</strong>
</details>

### Endpoints

* Listagem de produtos (GET): `/products`.

* Cadastro de produtos (POST): `/products`.
  - Corpo da requisição:
  ~~~
  {
	"name": "Espada longa",
    "amount": "30 peças de ouro"
  }
  ~~~
* Cadastro de usuário (POST): `/users`.
  - Corpo da requisição:
  ~~~
  {
    "username": "string",
    "classe": "string",
    "level": 1,
    "password": "string"
  }
  ~~~
* Listagem de todos os pedidos (GET): `/orders`.

* Login (POST): `/login`.
  - Corpo da requisição:
  ~~~
  {
    "username": "string",
    "password": "string"
  }
  ~~~

* Cadastro de um pedido: `/orders`.
  - IMPORTANTE: Um pedido só pode ser criado caso a pessoa usuária esteja logada e o token JWT validado
  - Corpo da requisição:
  ~~~
  {
    "productsIds": [1, 2]
  }
  ~~~

  #### :warning: Importante :warning:: O grupo Trybe foi responsavél por realizar o inicio do projeto (e também os commits iniciais), mas precisamente a estrutura do projeto e configuração dos tests para a avaliação do projeto.