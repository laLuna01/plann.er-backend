# Plann.er (backend) 

## Descrição
O **plann.er** é um sistema completo de roteiros de viagem e foi projetado para simplificar o planejamento de viagens com amigos, facilitando a criação e o gerenciamento de itinerários, atividades e links úteis. Ele utiliza técnologias como ReactJS e Node.js para criar uma aplicação robusta e escalável.

## Pré-requisitos
Certifique-se de ter o **Node.js** e o **npm** (Node Package Manager) instalados em sua máquina. Você pode baixá-los [aqui](https://nodejs.org/).

## Passo a Passo para Rodar o Projeto
- Clone o projeto

```bash
# Clone este repositório
$ git clone https://github.com/laLuna01/plann.er-backend.git

# Acesse a pasta do projeto no terminal/cmd
$ cd plann.er-backend
```

- Crie um arquivo chamado .env na raiz do projeto com o seguinte conteúdo:

```bash
DATABASE_URL="file:./dev.db"
API_BASE_URL="http://localhost:3333"
WEB_BASE_URL="http://localhost:5173"
PORT="3333"
```

- Execute o comando abaixo para instalar todas as dependências necessárias:

```bash
npm install
```

- Inicie o servidor com o comando:

```bash
npm run dev
```

Agora, sua aplicação deve estar rodando e acessível em http://localhost:3333


## Frontend

O repositório do frontend desse projeto se encontra em: https://github.com/laLuna01/plann.er-frontend