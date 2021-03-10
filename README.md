# Sales-api

This is a project for studies, this project is done in typescript, typeorm. if there are any doubts in its development I hope this project helps!


## This is a simple API that performs the follwoing

**/USER**
- Create User
- Get all Users
- Update Avatar

**/PRODUCT**
- Create Product
- Update Product
- Show Product
- Get all Product
- Delete Product

**/SESSIONS**
- Authentic user

**/PASSWORD**
- Reset Password
- Forgot Password

## Requirements

Install global TypeScript and TypeScript Node

```
npm install -g typescript ts-node
```

## Clone this repository

```
git clone https://github.com/Diqxy1/ts-restful.git
```

Then install the dependencies

```
yarn install
```

```
yarn install -D
```

## Start the server

Run in development mode

```
yarn dev
```

## TypeOrm configuration

In the project's root folder there is a file named **ormconfig.example.json** just rename it to **ormconfig.json**, in it is the database configuration

## Vscode Extensions

Basic backend extensions

![alt text](https://i.imgur.com/CMD5W0O.png)
![alt text](https://i.imgur.com/tjPGWmL.png)
![alt text](https://i.imgur.com/IEM5n8p.png)

## Some Commands

- Start the Project
-> yarn dev
- Create Migration
-> yarn typeorm migration:create -n **migration-name**
- Revert Migration
-> yarn typeorm migration:revert
- Run Migration
-> yarn typeorm migration:run

## Working Routes

The default URL is: https://localhost:3333

`GET:  http://localhost:3333`

## **User**

Get all Users:

`GET:  http://localhost:3333/users/`

Create User:

`POST:  http://localhost:3333/users/`

Update a Avatar:

`PATCH:  http://localhost:3333/users/avatar/ + file`

Forgot Password:

`POST:  http://localhost:3333/password/forgot/`

Reset Password:

`POST:  http://localhost:3333/password/reset/`

Authentication User:

`POST:  http://localhost:3333/sessions/`


## **Product**

Get all Products:

`GET:  http://localhost:3333/products/`

Show Product:

`GET:  http://localhost:3333/products/id/`

Update Product:

`PUT:  http://localhost:3333/products/id/`

Create Product:

`POST:  http://localhost:3333/products/`

Delete Product:

`DELETE:  http://localhost:3333/products/id/`
