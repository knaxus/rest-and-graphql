import {
  getAllUsersService,
  reviewsOfUsers,
  getResourceDetails as userDetails,
  createUsersService,
} from '../../services/users';
import { getAllSellersService, getProductsOfSeller, createSellersService } from '../../services/sellers';
import {
  getAllProductsService,
  getResourceDetails as productDetails,
  getSellerOfProduct,
  createProductsService,
  updateProductsService,
} from '../../services/products';
import { getAllReviewsService, createReviewsService } from '../../services/reviews';

export default {
  User: {
    async reviews(user) {
      const reviews = await reviewsOfUsers({ userId: user.id });
      return reviews;
    },
  },
  Seller: {
    async products(seller, { limit, offset }) {
      const products = await getProductsOfSeller({ sellerId: seller.id, limit, offset });
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
  },
  Mutation: {
    async addProduct(parent, args) {
      const newProduct = await createProductsService(args);
      return newProduct;
    },
    async updateProduct(parent, args) {
      const modifiedArgs = args;
      modifiedArgs.productId = args.id;
      const updatedProduct = await updateProductsService(modifiedArgs);
      return updatedProduct;
    },
    async addReview(parent, args) {
      const newReview = await createReviewsService(args);
      return newReview;
    },
    async addSeller(parent, args) {
      const newSeller = await createSellersService(args);
      return newSeller;
    },
    async addUser(parent, args) {
      const newUser = await createUsersService(args);
      return newUser;
    },
  },
};
