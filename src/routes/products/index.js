// users routes here
import { Router } from 'express';
import {
  getAllProducts,
  createProducts,
  updateProducts,
  deleteProducts,
} from '../../controllers/products';

const productRoutes = Router();

productRoutes.get('/', getAllProducts);
productRoutes.post('/', createProducts);
productRoutes.delete('/', deleteProducts);
productRoutes.patch('/:productId', updateProducts);

export default productRoutes;
