import Reward from '../../../entities/Reward';
import Mandalart from '../../../entities/Mandalart';
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
        const mandalart: Mandalart = req.mandalart;
        try {
          const reward = await Reward.findOne({ id: args.rewardId });
          if (reward) {
            if (reward.mandalartId === mandalart.id) {
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
