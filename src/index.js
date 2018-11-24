import path from 'path';
import app from './app';
/**
 * Initialise log4js first, so we don't miss any log messages
 */
const log4js = require('log4js');

log4js.configure(path.resolve(__dirname, './config/log4js.json'));

const { PORT = 8080 } = process.env;
app.listen(PORT, () => console.info(`app running at http://localhost:${PORT}`)); // eslint-disable-line no-console
