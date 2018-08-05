import Mandalart from '../../../entities/Mandalart';
import User from '../../../entities/User';
import {
  AddMandalartMutationArgs,
  AddMandalartResponse,
} from '../../../types/graph';
import { Resolvers } from '../../../types/resolvers';
import privateResolver from '../../../utils/privateResolver';

const resolvers: Resolvers = {
  Mutation: {
    AddMandalart: privateResolver(
      async (
        _,
        args: AddMandalartMutationArgs,
        { req }
      ): Promise<AddMandalartResponse> => {
        const user: User = req.user;
        try {
          await Mandalart.create({ ...args, user }).save();
          return {
            ok: true,
            error: null,
          };
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
