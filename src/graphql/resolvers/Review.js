import {
  getResourceDetails as productDetails,

} from '../../services/products';
import {

  getResourceDetails as userDetails,
} from '../../services/users';

export default {
  async user(review) {
    const user = await userDetails({ userId: review.userId });
    return user;
  },
  async product(review) {
    const user = await productDetails({ productId: review.productId });
    return user;
  },
};
