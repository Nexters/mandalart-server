import { getRepository } from 'typeorm';

import { Resolvers } from '../../../types/resolvers';
import privateResolver from '../../../utils/privateResolver';
import SubTodo from '../../../entities/SubTodo';
import Todo from '../../../entities/Todo';

const resolvers: Resolvers = {
  SubTodo: {
    todo: async obj => {
      return await getRepository(Todo)
        .createQueryBuilder('todo')
        .where({ id: obj.todoId })
        .getOne();
    },
  },

  Query: {
    subTodo: privateResolver(
      async (_, args) =>
        await getRepository(SubTodo)
          .createQueryBuilder('subTodo')
          .where({ id: args.id })
          .getOne()
    ),
  },
};
export default resolvers;
