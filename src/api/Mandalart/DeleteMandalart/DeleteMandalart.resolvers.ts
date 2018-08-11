import Mandalart from '../../../entities/Mandalart';
import User from '../../../entities/User';
import {
  DeleteMandalartMutationArgs,
  DeleteMandalartResponse,
} from '../../../types/graph';
import { Resolvers } from '../../../types/resolvers';
import privateResolver from '../../../utils/privateResolver';

const resolvers: Resolvers = {
  Mutation: {
    DeleteMandalart: privateResolver(
      async (
        _,
        args: DeleteMandalartMutationArgs,
        { req }
      ): Promise<DeleteMandalartResponse> => {
        const user: User = req.user;
        try {
          const mandalart = await Mandalart.findOne({ id: args.mandalartId });
          if (mandalart) {
            if (mandalart.userId === user.id) {
              mandalart.remove();
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
              error: 'Mandalart not found',
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
