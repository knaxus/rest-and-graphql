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
    const { name, description = '', price } = req.body;
    const { productId } = req.params;

    if (!productId) {
      return sendResponse(res, 400, {}, 'Invalid productId');
    }

    const product = await updateProductsService({
      productId,
      name,
      description,
      price,
    });
    return sendResponse(res, 200, { product }, 'Updated product details successfully');
  } catch (error) {
    logger.error('Error updating the product', error);
    return handleCustomThrow(res, error);
  }
}
