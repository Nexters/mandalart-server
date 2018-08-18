import { getRepository } from 'typeorm';

import { Resolvers } from '../../../types/resolvers';
import privateResolver from '../../../utils/privateResolver';
import Reward from '../../../entities/Reward';
import Rating from '../../../entities/Rating';

const resolvers: Resolvers = {
  Reward: {
    rating: async (obj, args, context, info) => {
      return await getRepository(Rating)
        .createQueryBuilder('rating')
        .where({ id: obj.ratingId })
        .getOne();
    },
  },

  Query: {
    reward: privateResolver(
      async (_, args) =>
        await getRepository(Reward)
          .createQueryBuilder('reward')
          .where({ id: args.id })
          .getOne()
    ),
  },
};
export default resolvers;
