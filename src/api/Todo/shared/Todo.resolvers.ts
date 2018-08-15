import { getRepository } from 'typeorm';

import { Resolvers } from '../../../types/resolvers';
import privateResolver from '../../../utils/privateResolver';
import Todo from '../../../entities/Todo';
import SubTodo from '../../../entities/SubTodo';
import User from '../../../entities/User';
import Mandalart from '../../../entities/Mandalart';

const resolvers: Resolvers = {
  Todo: {
    user: async obj => {
      return await getRepository(User)
        .createQueryBuilder('user')
        .where({ id: obj.userId })
        .getOne();
    },

    mandalart: async (obj, args, context, info) => {
      return await getRepository(Mandalart)
        .createQueryBuilder('mandalart')
        .where({ id: obj.mandalartId })
        .getOne();
    },

    subTodos: async obj => {
      return await getRepository(SubTodo)
        .createQueryBuilder('subTodo')
        .where({ todoId: obj.id })
        .getMany();
    },
  },

  Query: {
    todo: privateResolver(
      async (_, args) =>
        await getRepository(Todo)
          .createQueryBuilder('todo')
          .where({ id: args.id })
          .getOne()
    ),
  },
};
export default resolvers;
