import log4js from 'log4js';
import { validateGetAllSellers } from './_requestValidators';
import { sendResponse, handleCustomThrow } from '../../utils';
import { getAllSellersService } from '../../services/sellers';

const logger = log4js.getLogger('Sellers');

export default async function getListOfResource(req, res) {
  try {
    const errors = validateGetAllSellers(req);
    if (errors) {
      return sendResponse(res, 400, {}, errors[0].msg);
    }

    const { limit = 10, offset = 0, search = '' } = req.query;
    const list = await getAllSellersService({ search, limit, offset });
    return sendResponse(res, 200, { list }, 'Fetched sellers successfully');
  } catch (error) {
    logger.error('Error fetching all the sellers', error);
    return handleCustomThrow(res, error);
  }
}
