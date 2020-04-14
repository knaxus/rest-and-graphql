import dotenv from 'dotenv';
import path from 'path';
import log4js from 'log4js';
import app from './app';

dotenv.config({ path: path.resolve(__dirname, '../.env') });
// Initialise log4js first, so we don't miss any log messages
log4js.configure(path.resolve(__dirname, './config/log4js.json'));

const { PORT = 8080 } = process.env;
app.listen(PORT, () => console.info(`app running at http://localhost:${PORT}`));
