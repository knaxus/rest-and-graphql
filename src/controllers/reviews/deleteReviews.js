import log4js from 'log4js';
import { validateDeleteReviews } from './_requestValidators';
import { sendResponse, handleCustomThrow } from '../../utils';
import { deleteReviewsService } from '../../services/reviews';

const logger = log4js.getLogger('Reviews');

export default async function deleteResources(req, res) {
  try {
    const errors = validateDeleteReviews(req);
    if (errors) {
      return sendResponse(res, 400, {}, errors[0].msg);
    }
    const { reviewIdCollection } = req.body;
    const product = await deleteReviewsService({
      reviewIdCollection,
    });
    return sendResponse(res, 200, { product }, 'Deleted review successfully');
  } catch (error) {
    logger.error('Error deleting the review', error);
    return handleCustomThrow(res, error);
  }
}
