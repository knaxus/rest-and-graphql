import colors from 'colors';
import dotenv from 'dotenv';
import path from 'path';
import log4js from 'log4js';
import app from './app';

colors.enable();

dotenv.config({ path: path.resolve(__dirname, '../.env') });
// Initialise log4js first, so we don't miss any log messages
log4js.configure(path.resolve(__dirname, './config/log4js.json'));

const { PORT = 8080 } = process.env;
app.listen(PORT, () => console.log('App running at:'.yellow, `http://localhost:${PORT}`.red));
