// users routes here
import { Router } from 'express';
import {
  getAllProducts,
  createProducts,
  updateProducts,
  deleteProducts,
} from '../../controllers/products';

const productRoutes = Router();

productRoutes.get('/products', getAllProducts);
productRoutes.post('/products', createProducts);
productRoutes.delete('/products', deleteProducts);
productRoutes.patch('/products/:productId', updateProducts);

export default productRoutes;
