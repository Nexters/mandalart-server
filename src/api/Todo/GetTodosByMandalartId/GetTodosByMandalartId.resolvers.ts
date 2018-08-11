import Mandalart from '../../../entities/Mandalart';
import {
  GetTodosByMandalartIdQueryArgs,
  GetTodosByMandalartIdResponse,
} from '../../../types/graph';
import { Resolvers } from '../../../types/resolvers';
import privateResolver from '../../../utils/privateResolver';

const resolvers: Resolvers = {
  Query: {
    GetTodosByMandalartId: privateResolver(
      async (
        _,
        args: GetTodosByMandalartIdQueryArgs,
        { req }
      ): Promise<GetTodosByMandalartIdResponse> => {
        try {
          const mandalart = await Mandalart.findOne(
            { id: args.mandalartId },
            { relations: ['todos'] }
          );
          if (mandalart) {
            return {
              ok: true,
              error: null,
              todos: mandalart.todos,
            };
          } else {
            return {
              ok: false,
              error: 'Mandalart not found',
              todos: null,
            };
          }
        } catch (error) {
          return {
            ok: false,
            error: error.message,
            todos: null,
          };
        }
      }
    ),
  },
};

export default resolvers;
