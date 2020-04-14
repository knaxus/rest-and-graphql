import { createReviewsService, updateReviewsService, deleteReviewsService } from '../../../services/reviews';

const reviewMutations = {
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
};

export default reviewMutations;
