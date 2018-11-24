import log4js from 'log4js';
import { validateDeleteUsers } from './_requestValidators';
import { sendResponse, handleCustomThrow } from '../../utils';
import { deleteProductsService } from '../../services/products';

const logger = log4js.getLogger('Products');

export default async function updateProducts(req, res) {
  try {
    const errors = validateDeleteUsers(req);
    if (errors) {
      return sendResponse(res, 400, {}, errors[0].msg);
    }
    const { userIdCollection } = req.body;
    const product = await deleteProductsService({
      userIdCollection,
    });
    return sendResponse(res, 200, { product }, 'Deleted user successfully');
  } catch (error) {
    logger.error('Error deleting the user', error);
    return handleCustomThrow(res, error);
  }
}
