# To run locally

1. clone the repo
2. cd repo/
3. npm install
4. Import .sql file into your mysql, either by command or using any gui tool, For mac, i prefer  "Sequel Pro"
After this import step, a new database called 'classicmodels' created on your database.

5. Create .env file and add
   * READ_DB_HOST=localhost
   * READ_DB_PORT=3306
   * READ_DB_USER=root // your mysql username
   * READ_DB_PASSWORD=root // your mysql password
   * READ_DB_NAME=classicmodels

6. npm run dev