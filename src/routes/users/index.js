// users routes here
import { Router } from 'express';
import {
  getAllUsers, createUsers, updateUsers, deleteUsers,
} from '../../controllers/users';

const userRoutes = Router();

userRoutes.get('/users', getAllUsers);
userRoutes.post('/users', createUsers);
userRoutes.patch('/users/:userId', updateUsers);
userRoutes.delete('/users', deleteUsers);

export default userRoutes;
