import { getSellerOfProduct } from '../../services/products';

export default {
  async seller(product) {
    const seller = await getSellerOfProduct({ productId: product.id });
    return seller;
  },
};
