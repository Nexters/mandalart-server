import Mandalart from '../../../entities/Mandalart';
import {
  GetMandalartQueryArgs,
  GetMandalartResponse,
} from '../../../types/graph';
import { Resolvers } from '../../../types/resolvers';
import privateResolver from '../../../utils/privateResolver';

const resolvers: Resolvers = {
  Query: {
    GetMandalart: privateResolver(
      async (
        _,
        args: GetMandalartQueryArgs,
        { req }
      ): Promise<GetMandalartResponse> => {
        try {
          const mandalart = await Mandalart.findOne({ id: args.mandalartId });
          if (mandalart) {
            return {
              ok: true,
              error: null,
              mandalart: mandalart,
            };
          } else {
            return {
              ok: false,
              error: 'Mandalart not found',
              mandalart: null,
            };
          }
        } catch (error) {
          return {
            ok: false,
            error: error.message,
            mandalart: null,
          };
        }
      }
    ),
  },
};

export default resolvers;
