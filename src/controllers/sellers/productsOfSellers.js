import log4js from 'log4js';
import { validateProductsOfSellers } from './_requestValidators';
import { sendResponse, handleCustomThrow } from '../../utils';
import { getProductsOfSeller } from '../../services/sellers';

const logger = log4js.getLogger('Sellers');

export default async function getListOfResource(req, res) {
  try {
    const errors = validateProductsOfSellers(req);
    if (errors) {
      return sendResponse(res, 400, {}, errors[0].msg);
    }

    const { limit = 10, offset = 0 } = req.query;
    const { sellerId } = req.params;
    const list = await getProductsOfSeller({ sellerId, limit, offset });
    return sendResponse(res, 200, { list }, 'Fetched products of sellers successfully');
  } catch (error) {
    logger.error('Error fetching all the products of  sellers', error);
    return handleCustomThrow(res, error);
  }
}
