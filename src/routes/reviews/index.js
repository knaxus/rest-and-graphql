// users routes here
import { Router } from 'express';
import {
  getAllReviews,
  createReviews,
  deleteReviews,
  updateReviews,
} from '../../controllers/reviews';

const reviewRoutes = Router();

reviewRoutes.get('/reviews', getAllReviews);
reviewRoutes.post('/reviews', createReviews);
reviewRoutes.delete('/reviews', deleteReviews);
reviewRoutes.patch('/reviews/:reviewId', updateReviews);

export default reviewRoutes;
