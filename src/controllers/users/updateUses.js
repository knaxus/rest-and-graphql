import log4js from 'log4js';
import { validateUpdateUsers } from './_requestValidators';
import { sendResponse, handleCustomThrow } from '../../utils';
import { updateUsersService } from '../../services/users';

const logger = log4js.getLogger('Products');

export default async function updateProducts(req, res) {
  try {
    const errors = validateUpdateUsers(req);
    if (errors) {
      return sendResponse(res, 400, {}, errors[0].msg);
    }
    const {
      name, email, city = '', imageUrl = '',
    } = req.body;
    const { userId } = req.params;

    if (!userId) {
      return sendResponse(res, 400, {}, 'Invalid userId');
    }

    const product = await updateUsersService({
      userId,
      name,
      email,
      city,
      imageUrl,
    });
    return sendResponse(res, 200, { product }, 'Updated users successfully');
  } catch (error) {
    logger.error('Error updating the user details', error);
    return handleCustomThrow(res, error);
  }
}
