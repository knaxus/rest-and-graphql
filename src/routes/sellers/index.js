// users routes here
import { Router } from 'express';
import {
  getAllSellers,
  createSellers,
  updateSellers,
  deleteSellers,
  productsOfSellers,
} from '../../controllers/sellers';

const sellerRoutes = Router();

sellerRoutes.get('/', getAllSellers);
sellerRoutes.post('/', createSellers);
sellerRoutes.delete('/', deleteSellers);
sellerRoutes.patch('/:sellerId', updateSellers);
sellerRoutes.get('/:sellerId/products', productsOfSellers);

export default sellerRoutes;
