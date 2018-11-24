// users routes here
import { Router } from 'express';
import {
  getAllProducts,
  createProducts,
  updateProducts,
} from '../../controllers/products.controllers';

const productRoutes = Router();

productRoutes.get('/products', getAllProducts);
productRoutes.post('/products', createProducts);
productRoutes.patch('/products', updateProducts);

export default productRoutes;
