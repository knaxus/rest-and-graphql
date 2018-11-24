// users routes here
import { Router } from 'express';
import {
  getAllUsers, createUsers, updateUsers, deleteUsers,
} from '../../controllers/users';

const userRoutes = Router();

userRoutes.get('/users', getAllUsers);
userRoutes.post('/users', createUsers);
userRoutes.delete('/users', deleteUsers);
userRoutes.patch('/users/:userId', updateUsers);

export default userRoutes;
