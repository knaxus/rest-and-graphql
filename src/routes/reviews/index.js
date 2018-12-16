// users routes here
import { Router } from 'express';
import {
  getAllReviews,
  createReviews,
  deleteReviews,
  updateReviews,
} from '../../controllers/reviews';

const reviewRoutes = Router();

reviewRoutes.get('/', getAllReviews);
reviewRoutes.post('/', createReviews);
reviewRoutes.delete('/', deleteReviews);
reviewRoutes.patch('/:reviewId', updateReviews);

export default reviewRoutes;
