import Todo from '../../../entities/Todo';
import User from '../../../entities/User';
import { AddTodoMutationArgs, AddTodoResponse } from '../../../types/graph';
import { Resolvers } from '../../../types/resolvers';
import privateResolver from '../../../utils/privateResolver';

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
          await Todo.create({ ...args, user }).save();
          return {
            ok: true,
            error: null,
          };
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
