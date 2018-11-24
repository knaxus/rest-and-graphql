import { getAllUsersService } from '../../services/users';

export default {
  Query: {
    async users() {
      const listOfUsers = await getAllUsersService({});
      return listOfUsers;
    },
    name() {
      return 'GraphQL';
    },
  },
};
