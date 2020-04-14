import { getAllUsersService } from '../../services/users';
import { getAllSellersService } from '../../services/sellers';
import { getAllProductsService } from '../../services/products';
import { getAllReviewsService } from '../../services/reviews';

export default {
  async users(root, { limit, offset, name }) {
    const listOfUsers = await getAllUsersService({ limit, offset, search: name });
    return listOfUsers;
  },
  async sellers(root, { limit, offset }) {
    const listOfSellers = await getAllSellersService({ limit, offset });
    return listOfSellers;
  },
  async products(root, { limit, offset }) {
    const listOfProducts = await getAllProductsService({ limit, offset });
    return listOfProducts;
  },
  async reviews(root, { limit, offset }) {
    const listOfReviews = await getAllReviewsService({ limit, offset });
    return listOfReviews;
  },
};
