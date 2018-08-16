import { getRepository } from 'typeorm';

import { Resolvers } from '../../../types/resolvers';
import Reward from '../../../entities/Reward';
import User from '../../../entities/User';

const resolvers: Resolvers = {
  Rating: {
    user: async obj => {
      return await getRepository(User)
        .createQueryBuilder('user')
        .where({ id: obj.userId })
        .getOne();
    },

    rewards: async obj => {
      return await getRepository(Reward)
        .createQueryBuilder('reward')
        .where({ ratingId: obj.id })
        .getMany();
    },
  },
};
export default resolvers;
