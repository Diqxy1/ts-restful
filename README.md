# Sales-api

Este é um projeto com fins estudantis, projeto feito em typescript e typeorm usando o banco de dados postgres, caso haja duvidas em seu desenvolvimento espero que este projeto sane-as!   😁


# Iniciando o Projeto

Basta clonar o repositório e rodas seguir os passos a baixo, caso queira pode somente instalar as dependências e ir clonando a estrutura.

## Instalando as dependências

Para instalar as dependências você deve ter o **yarn** instalado na sua maquina, logo após execute os comandos abaixo!

- Instalando  dependências do Projeto

> yarn add bcryptjs celebrate cors date-fns express express-async-errors jsonwebtoken pg reflect-metadata typeorm

- Instalando dependências de desenvolvimento do projeto

>yarn add typescript tsconfig-paths ts-node-dev prettier eslint-plugin-prettier eslint-config-prettier eslint -D

- Instalando os types das dependências de desenvolvimento do projeto

>yarn add @types/bcryptjs @types/cors @types/express @types/joi @types/jsonwebtoken @types/node @typescript-eslint/eslint-plugin @typescript-eslint/parser -D

## Configuração do TypeOrm

Na pasta raiz do projeto tem um arquivo nomeado **ormconfig.example.json** basta renoméa-lo para **ormconfig.json**, nele está a configuração do banco de dados

## Vscode Extensões

Extensões basicas para back-end

![alt text](https://i.imgur.com/CMD5W0O.png)
![alt text](https://i.imgur.com/tjPGWmL.png)
![alt text](https://i.imgur.com/IEM5n8p.png)

## Alguns Comandos

- Startar o Projeto
-> yarn dev
- Criar Migração
-> yarn typeorm migration:create -n **migration-name**
- Reverter Migração
-> yarn typeorm migration:revert
- Rodar Migração
-> yarn typeorm migration:run
