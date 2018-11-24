import log4js from 'log4js';
import { validateGetALlProducts } from './_requestValidators';
import { sendResponse } from '../../utils';

const logger = log4js.getLogger('Products');

export async function getAllProducts(req, res) {
  try {
    const errors = validateGetALlProducts(req);
    if (errors) {
      return sendResponse(res, 400, {}, errors[0].msg);
    }

    const { limit = 10, offset = 0, search = '' } = req.query;
    // call service here
  } catch (error) {
    logger.error('Error fetching all the products', error);
    return handleCustomThrow(res, error);
  }
}
