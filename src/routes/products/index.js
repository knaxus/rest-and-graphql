// users routes here
import { Router } from 'express';
import { getAllProducts, createProducts } from '../../controllers/products.controllers';

const productRoutes = Router();

productRoutes.get('/products', getAllProducts);
productRoutes.post('/products', createProducts);

export default productRoutes;
