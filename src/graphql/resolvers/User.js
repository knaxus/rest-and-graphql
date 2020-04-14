import { reviewsOfUsers } from '../../services/users';

export default {
  async reviews(user) {
    const reviews = await reviewsOfUsers({ userId: user.id });
    return reviews;
  },
};
