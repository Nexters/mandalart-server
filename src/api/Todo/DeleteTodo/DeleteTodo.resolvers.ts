import Todo from '../../../entities/Todo';
import User from '../../../entities/User';
import {
  DeleteTodoMutationArgs,
  DeleteTodoResponse,
} from '../../../types/graph';
import { Resolvers } from '../../../types/resolvers';
import privateResolver from '../../../utils/privateResolver';

const resolvers: Resolvers = {
  Mutation: {
    DeleteTodo: privateResolver(
      async (
        _,
        args: DeleteTodoMutationArgs,
        { req }
      ): Promise<DeleteTodoResponse> => {
        const user: User = req.user;
        try {
          const todo = await Todo.findOne({ id: args.todoId });
          if (todo) {
            if (todo.userId === user.id) {
              todo.remove();
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
              error: 'Todo not found',
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
