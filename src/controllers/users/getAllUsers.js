import log4js from 'log4js';
import { validateGetAllUsers } from './_requestValidators';
import { sendResponse, handleCustomThrow } from '../../utils';
import { getAllUsersService } from '../../services/users';

const logger = log4js.getLogger('Users');

export default async function getListOfResources(req, res) {
  try {
    const errors = validateGetAllUsers(req);
    if (errors) {
      return sendResponse(res, 400, {}, errors[0].msg);
    }

    const { limit = 10, offset = 0, search = '' } = req.query;
    const list = await getAllUsersService({ search, limit, offset });
    return sendResponse(res, 200, { list }, 'Fetched users successfully');
  } catch (error) {
    logger.error('Error fetching all the users', error);
    return handleCustomThrow(res, error);
  }
}
