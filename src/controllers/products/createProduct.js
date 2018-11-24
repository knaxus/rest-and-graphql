import log4js from 'log4js';
import { validateCreateProduct } from './_requestValidators';
import { sendResponse, handleCustomThrow } from '../../utils';
import { createProductsService } from '../../services/products';

const logger = log4js.getLogger('Products');

export default async function createProducts(req, res) {
  try {
    const errors = validateCreateProduct(req);
    if (errors) {
      return sendResponse(res, 400, {}, errors[0].msg);
    }
    const { name, description = '', price } = req.body;
    const newProduct = await createProductsService({ name, description, price });
    return sendResponse(res, 200, { newProduct }, 'Created products successfully');
  } catch (error) {
    logger.error('Error creating the product', error);
    return handleCustomThrow(res, error);
  }
}
