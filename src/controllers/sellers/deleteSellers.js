import log4js from 'log4js';
import { validateDeleteSellers } from './_requestValidators';
import { sendResponse, handleCustomThrow } from '../../utils';
import { deleteSellersService } from '../../services/sellers';

const logger = log4js.getLogger('Sellers');

export default async function deleteResource(req, res) {
  try {
    const errors = validateDeleteSellers(req);
    if (errors) {
      return sendResponse(res, 400, {}, errors[0].msg);
    }
    const { userIdCollection } = req.body;
    const product = await deleteSellersService({
      userIdCollection,
    });
    return sendResponse(res, 200, { product }, 'Deleted seller successfully');
  } catch (error) {
    logger.error('Error deleting the seller', error);
    return handleCustomThrow(res, error);
  }
}
