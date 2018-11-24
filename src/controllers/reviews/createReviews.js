import log4js from 'log4js';
import { validateCreateReviews } from './_requestValidators';
import { sendResponse, handleCustomThrow } from '../../utils';
import { createReviewsService } from '../../services/reviews';

const logger = log4js.getLogger('Reviews');

export default async function createResources(req, res) {
  try {
    const errors = validateCreateReviews(req);
    if (errors) {
      return sendResponse(res, 400, {}, errors[0].msg);
    }
    const {
      userId, productId, title, description,
    } = req.body;
    const newReview = await createReviewsService({
      userId,
      productId,
      title,
      description,
    });
    return sendResponse(res, 200, { newReview }, 'Added review successfully');
  } catch (error) {
    logger.error('Error adding the review', error);
    return handleCustomThrow(res, error);
  }
}
