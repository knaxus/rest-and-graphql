import mysql from 'mysql2/promise';
import log4js from 'log4js';

const logger = log4js.getLogger('DB Connection');
const poolConfig = {
  host: process.env.READ_DB_HOST,
  port: process.env.READ_DB_PORT,
  user: process.env.READ_DB_USER,
  password: process.env.READ_DB_PASSWORD,
  multipleStatements: true,
  database: process.env.READ_DB_NAME,
  timezone: 'ist',
  charset: 'utf8mb4'
};

const readPool = mysql.createPool(poolConfig);
const writePool = mysql.createPool(poolConfig);

readPool.on('error', err => {
  logger.error(err);
  throw err;
});

writePool.on('error', err => {
  logger.error(err);
  throw err;
});

export { readPool, writePool };
