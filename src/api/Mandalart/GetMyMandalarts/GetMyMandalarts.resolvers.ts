import User from '../../../entities/User';
import { GetMyMandalartsResponse } from '../../../types/graph';
import { Resolvers } from '../../../types/resolvers';
import privateResolver from '../../../utils/privateResolver';

const resolvers: Resolvers = {
  Query: {
    GetMyMandalarts: privateResolver(
      async (_, __, { req }): Promise<GetMyMandalartsResponse> => {
        try {
          const user = await User.findOne(
            { id: req.user.id },
            { relations: ['mandalarts'] }
          );
          if (user) {
            return {
              ok: true,
              error: null,
              mandalarts: user.mandalarts,
            };
          } else {
            return {
              ok: false,
              error: 'User not found',
              mandalarts: null,
            };
          }
        } catch (error) {
          return {
            ok: false,
            error: error.message,
            mandalarts: null,
          };
        }
      }
    ),
  },
};
export default resolvers;
