import { createSellersService, updateSellersService, deleteSellersService } from '../../../services/sellers';

const sellerMutations = {
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
};

export default sellerMutations;
