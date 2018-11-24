import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import expressValidator from 'express-validator';
import log4js from 'log4js';

import sendResponse from './utils/sendResponse';

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
  sendResponse(
    res,
    200,
    { message: 'Welcome to user services, start from /users' },
    'Request Successful',
  );
});

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.message = 'Not found';
  logger.error('Not found:', err);
  sendResponse(res, 404, {}, err.message);
  next();
});

app.use((err, req, res, next) => {
  logger.error('Something went wrong:', err);
  sendResponse(res, 500, {}, err.message || 'Something went wrong');
  next();
});

app.listen(PORT, () => logger.info(`app running at http://localhost:${PORT}`));

export default app;
