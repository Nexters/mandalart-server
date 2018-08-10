import Todo from '../../../entities/Todo';
import {
  GetSubTodosByTodoIdQueryArgs,
  GetSubTodosByTodoIdResponse,
} from '../../../types/graph';
import { Resolvers } from '../../../types/resolvers';
import privateResolver from '../../../utils/privateResolver';

const resolvers: Resolvers = {
  Query: {
    GetSubTodosByTodoId: privateResolver(
      async (
        _,
        args: GetSubTodosByTodoIdQueryArgs,
        { req }
      ): Promise<GetSubTodosByTodoIdResponse> => {
        try {
          const todo = await Todo.findOne(
            { id: args.todoId },
            { relations: ['subTodos'] }
          );
          if (todo) {
            return {
              ok: true,
              error: null,
              subTodos: todo.subTodos,
            };
          } else {
            return {
              ok: false,
              error: 'Todo not found',
              subTodos: null,
            };
          }
        } catch (error) {
          return {
            ok: false,
            error: error.message,
            subTodos: null,
          };
        }
      }
    ),
  },
};

export default resolvers;
