import { createProductsService, updateProductsService, deleteProductsService } from '../../services/products';
import { createReviewsService, updateReviewsService, deleteReviewsService } from '../../services/reviews';
import { createSellersService, updateSellersService, deleteSellersService } from '../../services/sellers';
import { createUsersService, updateUsersService, deleteUsersService } from '../../services/users';

export default {
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
  async deleteProduct(parent, args) {
    const productIdCollection = args.id;
    const deletedProduct = await deleteProductsService(
      { productIdCollection: [productIdCollection] },
    );
    return deletedProduct;
  },
  async addReview(parent, args) {
    const newReview = await createReviewsService(args);
    return newReview;
  },
  async updateReview(parent, args) {
    const modifiedArgs = args;
    modifiedArgs.reviewId = args.id;
    const updatedReview = await updateReviewsService(modifiedArgs);
    return updatedReview;
  },
  async deleteReview(parent, args) {
    const reviewIdCollection = args.id;
    const deletedReview = await deleteReviewsService(
      { reviewIdCollection: [reviewIdCollection] },
    );
    return deletedReview;
  },
  async addSeller(parent, args) {
    const newSeller = await createSellersService(args);
    return newSeller;
  },
  async updateSeller(parent, args) {
    const modifiedArgs = args;
    modifiedArgs.sellerId = args.id;
    const updatedSeller = await updateSellersService(modifiedArgs);
    return updatedSeller;
  },
  async deleteSeller(parent, args) {
    const sellerIdCollection = args.id;
    const deletedSeller = await deleteSellersService(
      { sellerIdCollection: [sellerIdCollection] },
    );
    return deletedSeller;
  },
  async addUser(parent, args) {
    const newUser = await createUsersService(args);
    return newUser;
  },
  async updateUser(parent, args) {
    const modifiedArgs = args;
    modifiedArgs.userId = args.id;
    const updatedUser = await updateUsersService(modifiedArgs);
    return updatedUser;
  },
  async deleteUser(parent, args) {
    const userIdCollection = args.id;
    const deletedUser = await deleteUsersService(
      { userIdCollection: [userIdCollection] },
    );
    return deletedUser;
  },
};
