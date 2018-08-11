import SubTodo from '../../../entities/SubTodo';
import User from '../../../entities/User';
import {
  DeleteSubTodoMutationArgs,
  DeleteSubTodoResponse,
} from '../../../types/graph';
import { Resolvers } from '../../../types/resolvers';
import privateResolver from '../../../utils/privateResolver';

const resolvers: Resolvers = {
  Mutation: {
    DeleteSubTodo: privateResolver(
      async (
        _,
        args: DeleteSubTodoMutationArgs,
        { req }
      ): Promise<DeleteSubTodoResponse> => {
        const user: User = req.user;
        try {
          const subTodo = await SubTodo.findOne({ id: args.subTodoId });
          if (subTodo) {
            if (subTodo.userId === user.id) {
              subTodo.remove();
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
              error: 'SubTodo not found',
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
