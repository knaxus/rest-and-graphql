# GraphQL with Existing REST API

This repo is the result of my talk on **Client First REST API** at **Social Cops** organised by **[JS Lovers](https://www.meetup.com/jslovers/)**. Find my talk video here: [GraphQL with Node.js and MySQL](https://goo.gl/S2omDE)

## Run locally

- Clone the repo
- `npm install`
- Setup a `.env` file at the root of the repo
- `npm run dev`

## Notes

Contents of `.env` file

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
