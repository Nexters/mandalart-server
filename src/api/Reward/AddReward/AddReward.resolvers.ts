import Reward from "../../../entities/Reward";
import User from "../../../entities/User";
import { AddRewardMutationArgs, AddRewardResponse } from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver";
import Mandalart from "../../../entities/Mandalart";

const resolvers: Resolvers = {
  Mutation: {
    AddReward: privateResolver(
      async (
        _,
        args: AddRewardMutationArgs,
        { req }
      ): Promise<AddRewardResponse> => {
        const user: User = req.user;
        try {
          const mandalart = await Mandalart.findOne({ id: args.mandalartId });
          if (mandalart) {
            if (mandalart.userId === user.id) {
              const reward = await Reward.create({
                ...args,
              }).save();
              return {
                ok: true,
                error: null,
                reward
              };
            } else {
              return {
                ok: false,
                error: "Unauthorized",
                reward: null
              };
            }
          } else {
            return {
              ok: false,
              error: "Reward not found",
              reward: null
            };
          }
        } catch (error) {
          return {
            ok: false,
            error: error.message,
            reward: null
          };
        }
      }
    )
  }
};

export default resolvers;
