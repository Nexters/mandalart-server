import { getRepository } from 'typeorm';

import { Resolvers } from '../../../types/resolvers';
import privateResolver from '../../../utils/privateResolver';
import User from '../../../entities/User';

const resolvers: Resolvers = {
  Query: {
    users: privateResolver(
      async _ =>
        await getRepository(User)
          .createQueryBuilder('user')
          .getMany()
    ),
  },
};
export default resolvers;
