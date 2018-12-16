import { Router } from 'express';
import products from './products';
import users from './users';
import sellers from './sellers';
import reviews from './reviews';

const routes = Router();

routes.use('/products', products);
routes.use('/users', users);
routes.use('/sellers', sellers);
routes.use('/reviews', reviews);

export default routes;
