import log4js from 'log4js';
import { validateLoginUsers } from './_requestValidators';
import { sendResponse, handleCustomThrow } from '../../utils';
import { loginUserService } from '../../services/users';


const logger = log4js.getLogger('Users');

export default async function loginUser(req, res) {
  try {
    const errors = validateLoginUsers(req);
    if (errors) {
      return sendResponse(res, 400, {}, errors[0].msg);
    }

    const result = await loginUserService(req.body);
    return sendResponse(res, 200, { ...result }, 'Login successfull');
  } catch (error) {
    logger.error('Error logging in user', error);
    return handleCustomThrow(res, error);
  }
}
