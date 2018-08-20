import Reward from '../../../entities/Reward';
import Mandalart from '../../../entities/Mandalart';
import {
  DeleteRewardMutationArgs,
  DeleteRewardResponse,
} from '../../../types/graph';
import { Resolvers } from '../../../types/resolvers';
import privateResolver from '../../../utils/privateResolver';

const resolvers: Resolvers = {
  Mutation: {
    DeleteReward: privateResolver(
      async (
        _,
        args: DeleteRewardMutationArgs,
        { req }
      ): Promise<DeleteRewardResponse> => {
        const mandalart: Mandalart = req.mandalart;
        try {
          const reward = await Reward.findOne({ id: args.rewardId });
          if (reward) {
            if (reward.mandalart.id === mandalart.id) {
              reward.remove();
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
