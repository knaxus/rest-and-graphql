import log4js from 'log4js';
import { validateCreateSellers } from './_requestValidators';
import { sendResponse, handleCustomThrow } from '../../utils';
import { createSellersService } from '../../services/sellers';

const logger = log4js.getLogger('Sellers');

export default async function createResource(req, res) {
  try {
    const errors = validateCreateSellers(req);
    if (errors) {
      return sendResponse(res, 400, {}, errors[0].msg);
    }
    const {
      name, email, city = '', imageUrl = '',
    } = req.body;
    const newSeller = await createSellersService({
      name,
      email,
      city,
      imageUrl,
    });
    return sendResponse(res, 200, { newSeller }, 'Created seller successfully');
  } catch (error) {
    logger.error('Error creating seller', error);
    return handleCustomThrow(res, error);
  }
}
