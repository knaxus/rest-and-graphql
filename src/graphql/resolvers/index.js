import { getAllUsersService, getResourceDetails as userDetails } from '../../services/users';
import { getAllSellersService } from '../../services/sellers';
import {
  getAllProductsService,
  getResourceDetails as productDetails,
} from '../../services/products';
import { getAllReviewsService } from '../../services/reviews';

export default {
  Review: {
    async user(review) {
      const user = await userDetails({ userId: review.userId });
      return user;
    },
    async product(review) {
      const user = await productDetails({ productId: review.productId });
      return user;
    },
  },
  Query: {
    async users() {
      const listOfUsers = await getAllUsersService({});
      return listOfUsers;
    },
    async sellers() {
      const listOfSellers = await getAllSellersService({});
      return listOfSellers;
    },
    async products() {
      const listOfProducts = await getAllProductsService({});
      return listOfProducts;
    },
    async reviews() {
      const listOfReviews = await getAllReviewsService({});
      return listOfReviews;
    },
  },
};
