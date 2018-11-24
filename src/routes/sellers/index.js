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

sellerRoutes.get('/sellers', getAllSellers);
sellerRoutes.post('/sellers', createSellers);
sellerRoutes.delete('/sellers', deleteSellers);
sellerRoutes.patch('/sellers/:sellerId', updateSellers);
sellerRoutes.get('/sellers/:sellerId/products', productsOfSellers);

export default sellerRoutes;
