# Sales-api

This is a project for studies, this project is done in typescript, typeorm. if there are any doubts in its development I hope this project helps!


# Starting the Project

Just clone the repository and run the steps below, if you want you can just install the dependencies and go cloning the structure.

## Installing the dependencies

To install the dependencies you must have ** yarn ** installed on your machine, right after executing the commands below.

- Installing Project dependencies

> yarn add bcryptjs celebrate cors date-fns express express-async-errors jsonwebtoken pg reflect-metadata typeorm multer nodemailer

- Installing project development dependencies

>yarn add typescript tsconfig-paths ts-node-dev prettier eslint-plugin-prettier eslint-config-prettier eslint -D

- Installing the types of the project's development dependencies

>yarn add @types/bcryptjs @types/cors @types/express @types/joi @types/jsonwebtoken @types/node @typescript-eslint/eslint-plugin @typescript-eslint/parser @types/multer @types/nodemailer -D

## TypeOrm configuration

In the project's root folder there is a file named ** ormconfig.example.json ** just rename it to ** ormconfig.json **, in it is the database configuration

## Vscode Extensions

Basic backend extensions

![alt text](https://i.imgur.com/CMD5W0O.png)
![alt text](https://i.imgur.com/tjPGWmL.png)
![alt text](https://i.imgur.com/IEM5n8p.png)

## Alguns Comandos

- Start the Project
-> yarn dev
- Create Migration
-> yarn typeorm migration:create -n **migration-name**
- Revert Migration
-> yarn typeorm migration:revert
- Run Migration
-> yarn typeorm migration:run
