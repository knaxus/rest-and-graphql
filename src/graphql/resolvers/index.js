import {
  getAllUsersService,
  reviewsOfUsers,
  getResourceDetails as userDetails,
} from '../../services/users';
import { getAllSellersService, getProductsOfSeller } from '../../services/sellers';
import {
  getAllProductsService,
  getResourceDetails as productDetails,
  getSellerOfProduct,
} from '../../services/products';
import { getAllReviewsService } from '../../services/reviews';

export default {
  User: {
    async reviews(user) {
      const reviews = await reviewsOfUsers({ userId: user.id });
      return reviews;
    },
  },
  Seller: {
    async products(seller) {
      const products = await getProductsOfSeller({ sellerId: seller.id });
      return products;
    },
  },
  Product: {
    async seller(product) {
      const seller = await getSellerOfProduct({ productId: product.id });
      return seller;
    },
  },
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
