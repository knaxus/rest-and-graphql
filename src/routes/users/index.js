// users routes here
import { Router } from 'express';
import {
  getAllUsers,
  createUsers,
  updateUsers,
  deleteUsers,
  reviewsOfUser,
} from '../../controllers/users';

const userRoutes = Router();

userRoutes.get('/users', getAllUsers);
userRoutes.post('/users', createUsers);
userRoutes.delete('/users', deleteUsers);
userRoutes.patch('/users/:userId', updateUsers);
userRoutes.get('/users/:userId/reviews', reviewsOfUser);

export default userRoutes;
