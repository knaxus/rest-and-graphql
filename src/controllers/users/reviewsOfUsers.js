import log4js from 'log4js';
import { sendResponse, handleCustomThrow } from '../../utils';
import { getResourceDetails, reviewsOfUsers } from '../../services/users';

const logger = log4js.getLogger('Users');

export default async function getListOfResource(req, res) {
  try {
    const { limit = 10, offset = 0 } = req.query;
    const { userId } = req.params;
    const user = await getResourceDetails({ userId });
    const list = await reviewsOfUsers({ userId, limit, offset });
    return sendResponse(res, 200, { user, list }, 'Fetched reviews of user successfully');
  } catch (error) {
    logger.error('Error fetching all the reviews of  users', error);
    return handleCustomThrow(res, error);
  }
}
