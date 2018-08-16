import Todo from '../../../entities/Todo';
import User from '../../../entities/User';
import { EditTodoMutationArgs, EditTodoResponse } from '../../../types/graph';
import { Resolvers } from '../../../types/resolvers';
import cleanNullArgs from '../../../utils/cleanNullArg';
import privateResolver from '../../../utils/privateResolver';

const resolvers: Resolvers = {
  Mutation: {
    EditTodo: privateResolver(
      async (
        _,
        args: EditTodoMutationArgs,
        { req }
      ): Promise<EditTodoResponse> => {
        const user: User = req.user;
        try {
          const todo = await Todo.findOne({ id: args.todoId });
          if (todo) {
            if (todo.userId === user.id) {
              const notNull = cleanNullArgs(args);
              await Todo.update({ id: args.todoId }, { ...notNull });
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
