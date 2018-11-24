import log4js from 'log4js';
import { validateGetAllProducts } from './_requestValidators';
import { sendResponse, handleCustomThrow } from '../../utils';
import { getAllProductsService } from '../../services/products';

const logger = log4js.getLogger('Products');

export default async function getAllProducts(req, res) {
  try {
    const errors = validateGetAllProducts(req);
    if (errors) {
      return sendResponse(res, 400, {}, errors[0].msg);
    }

    const { limit = 10, offset = 0, search = '' } = req.query;
    const list = await getAllProductsService({ search, limit, offset });
    return sendResponse(res, 200, { list }, 'Fetched products successfully');
  } catch (error) {
    logger.error('Error fetching all the products', error);
    return handleCustomThrow(res, error);
  }
}
