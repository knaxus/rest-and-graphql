import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import expressValidator from 'express-validator';
import log4js from 'log4js';
import dotenv from 'dotenv';
import path from 'path';

// custom modues
import { sendResponse } from './utils';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const { PORT } = process.env;
const logger = log4js.getLogger('app');

const app = express();
app.disable('x-powered-by');

app.use(log4js.connectLogger(log4js.getLogger('http'), { level: 'auto' }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(expressValidator());

// root route
app.get('/', (req, res) => {
  sendResponse(res, 200, { message: 'Welcome to Awesome Products' }, 'Request Successful');
});

export default app;
