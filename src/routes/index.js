import { Router } from 'express';
import products from './products';
import users from './users';
import sellers from './sellers';
import reviews from './reviews';

const routes = Router();

routes.use('/', products);
routes.use('/', users);
routes.use('/', sellers);
routes.use('/', reviews);

export default routes;
