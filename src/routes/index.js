import { Router } from 'express';
import products from './products';
import users from './users';

const routes = Router();

routes.use('/', products);
routes.use('/', users);

export default routes;
