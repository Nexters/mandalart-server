import Mandalart from '../../../entities/Mandalart';
import {
  GetRewardsByMandalartIdQueryArgs,
  GetRewardsByMandalartIdResponse,
} from '../../../types/graph';
import { Resolvers } from '../../../types/resolvers';
import privateResolver from '../../../utils/privateResolver';
import { getRepository } from 'typeorm';
import Reward from '../../../entities/Reward';

const resolvers: Resolvers = {
  GetRewardsByMandalartIdResponse: {
    rewards: async obj => {
      return await getRepository(Reward)
        .createQueryBuilder('reward')
        .where({ mandalartId: obj.rewards[0].mandalartId })
        .getMany();
    },
  },

  Query: {
    GetRewardsByMandalartId: privateResolver(
      async (
        _,
        args: GetRewardsByMandalartIdQueryArgs,
        { req }
      ): Promise<GetRewardsByMandalartIdResponse> => {
        try {
          const mandalart = await Mandalart.findOne(
            { id: args.mandalartId },
            { relations: ['rewards'] }
          );
          if (mandalart) {
            return {
              ok: true,
              error: null,
              rewards: mandalart.rewards,
            };
          } else {
            return {
              ok: false,
              error: 'Rating not found',
              rewards: null,
            };
          }
        } catch (error) {
          return {
            ok: false,
            error: error.message,
            rewards: null,
          };
        }
      }
    ),
  },
};

export default resolvers;
