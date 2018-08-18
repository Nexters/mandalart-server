import Reward from '../../../entities/Reward';
import Rating from '../../../entities/Rating';
import { EditRewardMutationArgs, EditRewardResponse } from '../../../types/graph';
import { Resolvers } from '../../../types/resolvers';
import cleanNullArgs from '../../../utils/cleanNullArg';
import privateResolver from '../../../utils/privateResolver';

const resolvers: Resolvers = {
  Mutation: {
    EditReward: privateResolver(
      async (
        _,
        args: EditRewardMutationArgs,
        { req }
      ): Promise<EditRewardResponse> => {
        const rating: Rating = req.rating;
        try {
          const reward = await Reward.findOne({ id: args.rewardId });
          if (reward) {
            if (reward.ratingId === rating.id) {
              const notNull = cleanNullArgs(args);
              await Reward.update({ id: args.rewardId }, { ...notNull });
              return {
                ok: true,
                error: null,
              };
            } else {
              return {
                ok: false,
                error: 'Not Authorized',
              };
            }
          } else {
            return {
              ok: false,
              error: 'Reward not found',
            };
          }
        } catch (error) {
          return {
            ok: false,
            error: error.message,
          };
        }
      }
    ),
  },
};
export default resolvers;
