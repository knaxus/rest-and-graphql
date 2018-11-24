// users routes here
import { Router } from 'express';
import {
  getAllSellers,
  createSellers,
  updateSellers,
  deleteSellers,
} from '../../controllers/sellers';

const sellerRoutes = Router();

sellerRoutes.get('/users', getAllSellers);
sellerRoutes.post('/users', createSellers);
sellerRoutes.patch('/users/:userId', updateSellers);
sellerRoutes.delete('/users', deleteSellers);

export default sellerRoutes;
