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

userRoutes.get('/', getAllUsers);
userRoutes.post('/', createUsers);
userRoutes.delete('/', deleteUsers);
userRoutes.patch('/:userId', updateUsers);
userRoutes.get('/:userId/reviews', reviewsOfUser);

export default userRoutes;
