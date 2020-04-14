import userMutations from './UserMutations';
import sellerMutations from './SellersMutations';
import productMutations from './ProductMutations';
import reviewMutations from './ReviewMutations';


export default {
  ...userMutations,
  ...sellerMutations,
  ...productMutations,
  ...reviewMutations,
};
