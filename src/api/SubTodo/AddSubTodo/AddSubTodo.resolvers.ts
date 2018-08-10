import Todo from '../../../entities/Todo';
import SubTodo from '../../../entities/SubTodo';
import User from '../../../entities/User';
import {
  AddSubTodoMutationArgs,
  AddSubTodoResponse,
} from '../../../types/graph';
import { Resolvers } from '../../../types/resolvers';
import privateResolver from '../../../utils/privateResolver';

const resolvers: Resolvers = {
  Mutation: {
    AddSubTodo: privateResolver(
      async (
        _,
        args: AddSubTodoMutationArgs,
        { req }
      ): Promise<AddSubTodoResponse> => {
        const user: User = req.user;
        try {
          const todo = await Todo.findOne({ id: args.todoId });
          if (todo) {
            if (todo.userId === user.id) {
              const subTodo = await SubTodo.create({
                ...args,
                user,
                todo,
              }).save();
              return {
                ok: true,
                error: null,
                subTodo,
              };
            } else {
              return {
                ok: false,
                error: 'Unauthorized',
                subTodo: null,
              };
            }
          } else {
            return {
              ok: false,
              error: 'Todo not found',
              subTodo: null,
            };
          }
        } catch (error) {
          return {
            ok: false,
            error: error.message,
            subTodo: null,
          };
        }
      }
    ),
  },
};

export default resolvers;
