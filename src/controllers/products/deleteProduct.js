import log4js from 'log4js';
import { validateDeleteProduct } from './_requestValidators';
import { sendResponse, handleCustomThrow } from '../../utils';
import { deleteProductsService } from '../../services/products';

const logger = log4js.getLogger('Products');

export default async function updateProducts(req, res) {
  try {
    const errors = validateDeleteProduct(req);
    if (errors) {
      return sendResponse(res, 400, {}, errors[0].msg);
    }
    const { productIdCollection } = req.body;
    const product = await deleteProductsService({
      productIdCollection,
    });
    return sendResponse(res, 200, { product }, 'Fetched products successfully');
  } catch (error) {
    logger.error('Error creating the product', error);
    return handleCustomThrow(res, error);
  }
}
