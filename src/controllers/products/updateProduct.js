import log4js from 'log4js';
import { validateUpdateProduct } from './_requestValidators';
import { sendResponse, handleCustomThrow } from '../../utils';
import { updateProductsService } from '../../services/products';

const logger = log4js.getLogger('Products');

export default async function updateProducts(req, res) {
  try {
    const errors = validateUpdateProduct(req);
    if (errors) {
      return sendResponse(res, 400, {}, errors[0].msg);
    }
    const {
      productId, name, description = '', price,
    } = req.body;
    const product = await updateProductsService({
      productId,
      name,
      description,
      price,
    });
    return sendResponse(res, 200, { product }, 'Fetched products successfully');
  } catch (error) {
    logger.error('Error creating the product', error);
    return handleCustomThrow(res, error);
  }
}
