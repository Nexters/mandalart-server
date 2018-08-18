import { getRepository } from 'typeorm';

import { Resolvers } from '../../../types/resolvers';
import privateResolver from '../../../utils/privateResolver';
import Reward from '../../../entities/Reward';
import Mandalart from '../../../entities/Mandalart';


const resolvers: Resolvers = {
  Reward: {
    mandalart: async (obj, args, context, info) => {
      return await getRepository(Mandalart)
        .createQueryBuilder('mandalart')
        .where({ mandalartId: obj.id })
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
