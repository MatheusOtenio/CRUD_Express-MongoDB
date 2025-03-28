# Projeto Express com MongoDB e EJS

Este projeto é um aplicativo Node.js utilizando Express e EJS como motor de visualização, com um sistema CRUD funcional para gerenciar clientes em um banco de dados MongoDB.

![Imagem](img/1.png)

## Tecnologias/Conceitos Utilizadas

- Node.js
- Express
- EJS
- MongoDB
- Dotenv
- SOLID
- CRUD

## Configuração do Projeto

### Instalação das Dependências

Instale as dependências necessárias executando o seguinte comando:

```sh
npm install express ejs dotenv mongodb morgan cookie-parser
```

### Configuração do Banco de Dados (MongoDB)

- A conexão com o MongoDB foi criada no arquivo `db.js`.
- Os clientes são armazenados na coleção **customers** dentro do banco de dados.
- Certifique-se de configurar a variável de ambiente `MONGO_DATABASE` corretamente no arquivo `.env` para selecionar o banco desejado.

## Criação das Rotas

As rotas estão implementadas no arquivo `routes/index.js`:

```sh
GET /          → Renderiza a página principal com a lista de clientes.
POST /save     → Adiciona um novo cliente no banco de dados.
POST /update/:id → Atualiza um cliente existente.
GET /delete/:id → Remove um cliente do banco.
```

## Separação da Interface com EJS e CSS

- Criado um layout base (`layout.ejs`) para reutilizar HTML entre páginas.
- `index.ejs` atualizado para exibir e gerenciar clientes.
- O arquivo de estilos `style.css` foi movido para `/public/stylesheets/`.
- Configurado o Express para servir arquivos estáticos corretamente.

CRUD está completamente funcional, permitindo adicionar, listar, atualizar e excluir usuários!
