import { Router } from 'express';
import products from './products';
import users from './users';
import sellers from './sellers';

const routes = Router();

routes.use('/', products);
routes.use('/', users);
routes.use('/', sellers);

export default routes;
