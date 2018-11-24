import log4js from 'log4js';
import { validateGetAllReviews } from './_requestValidators';
import { sendResponse, handleCustomThrow } from '../../utils';
import { getAllReviewsService } from '../../services/reviews';

const logger = log4js.getLogger('Reviews');

export default async function getAllResources(req, res) {
  try {
    const errors = validateGetAllReviews(req);
    if (errors) {
      return sendResponse(res, 400, {}, errors[0].msg);
    }

    const { limit = 10, offset = 0, search = '' } = req.query;
    const list = await getAllReviewsService({ search, limit, offset });
    return sendResponse(res, 200, { list }, 'Fetched reviews successfully');
  } catch (error) {
    logger.error('Error fetching the reviews', error);
    return handleCustomThrow(res, error);
  }
}
