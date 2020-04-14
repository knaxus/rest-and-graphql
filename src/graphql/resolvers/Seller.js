import { getProductsOfSeller } from '../../services/sellers';

export default {
  async products(seller, { limit, offset }) {
    const products = await getProductsOfSeller({ sellerId: seller.id, limit, offset });
    return products;
  },
};
