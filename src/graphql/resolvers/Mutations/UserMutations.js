import { createUsersService, updateUsersService, deleteUsersService } from '../../../services/users/index';

const userMutations = {
  async addUser(parent, args) {
    const user = await createUsersService(args.data);
    return user;
  },
  async updateUser(parent, args) {
    const userData = args.data;
    userData.userId = args.id;
    const user = await updateUsersService(userData);
    return user;
  },
  async deleteUser(parent, args) {
    const userIdCollection = args.id;
    const user = await deleteUsersService(
      { userIdCollection: [userIdCollection] },
    );
    return user;
  },
};

export default userMutations;
