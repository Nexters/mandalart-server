import Mandalart from '../../../entities/Mandalart';
import User from '../../../entities/User';
import {
  EditMandalartMutationArgs,
  EditMandalartResponse,
} from '../../../types/graph';
import { Resolvers } from '../../../types/resolvers';
import cleanNullArgs from '../../../utils/cleanNullArg';
import privateResolver from '../../../utils/privateResolver';

const resolvers: Resolvers = {
  Mutation: {
    EditMandalart: privateResolver(
      async (
        _,
        args: EditMandalartMutationArgs,
        { req }
      ): Promise<EditMandalartResponse> => {
        const user: User = req.user;
        try {
          const mandalart = await Mandalart.findOne({ id: args.mandalartId });
          if (mandalart) {
            if (mandalart.userId === user.id) {
              const notNull = cleanNullArgs(args);
              await Mandalart.update({ id: args.mandalartId }, { ...notNull });
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
