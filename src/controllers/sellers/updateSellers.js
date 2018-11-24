import log4js from 'log4js';
import { validateUpdateSellers } from './_requestValidators';
import { sendResponse, handleCustomThrow } from '../../utils';
import { updateSellersService } from '../../services/sellers';

const logger = log4js.getLogger('Sellers');

export default async function updateResource(req, res) {
  try {
    const errors = validateUpdateSellers(req);
    if (errors) {
      return sendResponse(res, 400, {}, errors[0].msg);
    }
    const {
      name, email, city = '', imageUrl = '',
    } = req.body;
    const { sellerId } = req.params;

    if (!sellerId) {
      return sendResponse(res, 400, {}, 'Invalid sellerId');
    }

    const seller = await updateSellersService({
      sellerId,
      name,
      email,
      city,
      imageUrl,
    });
    return sendResponse(res, 200, { seller }, 'Updated users successfully');
  } catch (error) {
    logger.error('Error updating the user details', error);
    return handleCustomThrow(res, error);
  }
}
