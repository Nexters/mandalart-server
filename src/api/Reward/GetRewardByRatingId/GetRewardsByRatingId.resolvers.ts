import Rating from '../../../entities/Rating';
import {
  GetRewardsByRatingIdQueryArgs,
  GetRewardsByRatingIdResponse,
} from '../../../types/graph';
import { Resolvers } from '../../../types/resolvers';
import privateResolver from '../../../utils/privateResolver';
import { getRepository } from 'typeorm';
import Reward from '../../../entities/Reward';

const resolvers: Resolvers = {
  GetRewardsByRatingIdResponse: {
    rewards: async obj => {
      return await getRepository(Reward)
        .createQueryBuilder('reward')
        .where({ ratingId: obj.rewards[0].ratingId })
        .getMany();
    },
  },

  Query: {
    GetRewardsByRatingId: privateResolver(
      async (
        _,
        args: GetRewardsByRatingIdQueryArgs,
        { req }
      ): Promise<GetRewardsByRatingIdResponse> => {
        try {
          const rating = await Rating.findOne(
            { id: args.ratingId },
            { relations: ['rewards'] }
          );
          if (rating) {
            return {
              ok: true,
              error: null,
              rewards: rating.rewards,
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
