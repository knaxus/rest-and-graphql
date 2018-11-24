import log4js from 'log4js';
import { validateCreateUsers } from './_requestValidators';
import { sendResponse, handleCustomThrow } from '../../utils';
import { createUsersService } from '../../services/users';

const logger = log4js.getLogger('Products');

export default async function createProducts(req, res) {
  try {
    const errors = validateCreateUsers(req);
    if (errors) {
      return sendResponse(res, 400, {}, errors[0].msg);
    }
    const {
      name, email, city = '', imageUrl = '',
    } = req.body;
    const newUser = await createUsersService({
      name,
      email,
      city,
      imageUrl,
    });
    return sendResponse(res, 200, { newUser }, 'Created user successfully');
  } catch (error) {
    logger.error('Error creating user', error);
    return handleCustomThrow(res, error);
  }
}
