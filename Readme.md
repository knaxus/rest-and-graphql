# GraphQL with Existing REST API

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/bef9e90ff8d340a58bd307db645ce715)](https://app.codacy.com/app/ashokdey/rest-and-graphql?utm_source=github.com&utm_medium=referral&utm_content=knaxus/rest-and-graphql&utm_campaign=Badge_Grade_Dashboard)

This repository contains both REST & GraphQL API.

[Banner](./__assets/banner.png)

## Run locally

- Clone the repo
- `npm install`
- Setup a `.env` file at the root of the repo
- `npm run dev`

## Notes

- Contents of `.env` file

```env
PORT=8080
NODE_ENV = development
READ_DB_HOST = localhost
READ_DB_USER = root
READ_DB_PASSWORD = password
READ_DB_NAME = awesome_products
READ_DB_PORT = 3306
READ_DB_CONNECTION_LIMIT = 10
WRITE_DB_HOST = localhost
WRITE_DB_USER = root
WRITE_DB_PASSWORD = password
WRITE_DB_NAME = awesome_products
WRITE_DB_PORT = 3306
WRITE_DB_CONNECTION_LIMIT = 10
```

- Use the `SQL` file located in `resources` folder to create the database

- Will be updated
