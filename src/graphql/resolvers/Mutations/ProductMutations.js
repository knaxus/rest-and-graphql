import { createProductsService, updateProductsService, deleteProductsService } from '../../../services/products/index';

const productMutations = {
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
};

export default productMutations;
