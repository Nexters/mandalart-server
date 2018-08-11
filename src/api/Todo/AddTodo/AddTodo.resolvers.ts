import Todo from '../../../entities/Todo';
import User from '../../../entities/User';
import { AddTodoMutationArgs, AddTodoResponse } from '../../../types/graph';
import { Resolvers } from '../../../types/resolvers';
import privateResolver from '../../../utils/privateResolver';
import Mandalart from '../../../entities/Mandalart';

const resolvers: Resolvers = {
  Mutation: {
    AddTodo: privateResolver(
      async (
        _,
        args: AddTodoMutationArgs,
        { req }
      ): Promise<AddTodoResponse> => {
        const user: User = req.user;
        try {
          const mandalart = await Mandalart.findOne({ id: args.mandalartId });
          if (mandalart) {
            if (mandalart.userId === user.id) {
              const todo = await Todo.create({
                ...args,
                user,
                mandalart,
              }).save();
              return {
                ok: true,
                error: null,
                todo,
              };
            } else {
              return {
                ok: false,
                error: 'Unauthorized',
                todo: null,
              };
            }
          } else {
            return {
              ok: false,
              error: 'Todo not found',
              todo: null,
            };
          }
        } catch (error) {
          return {
            ok: false,
            error: error.message,
            todo: null,
          };
        }
      }
    ),
  },
};

export default resolvers;
