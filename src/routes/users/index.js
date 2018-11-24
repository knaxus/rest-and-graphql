// users routes here
import { Router } from 'express';
import {
  getAllUsers, createUsers, updateUsers, deleteUsers,
} from '../../controllers/users';

const productRoutes = Router();

productRoutes.get('/users', getAllUsers);
productRoutes.post('/users', createUsers);
productRoutes.patch('/users/:userId', updateUsers);
productRoutes.delete('/users', deleteUsers);

export default productRoutes;
