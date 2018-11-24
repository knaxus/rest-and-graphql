// users routes here
import { Router } from 'express';
import { getAllProducts } from '../../controllers/products.controllers';

const productRoutes = Router();

productRoutes.get('/products', getAllProducts);

export default productRoutes;
