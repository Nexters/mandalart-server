import { getRepository } from 'typeorm';

import { Resolvers } from '../../../types/resolvers';
import Todo from '../../../entities/Todo';
import User from '../../../entities/User';
import Reward from '../../../entities/Reward';

const resolvers: Resolvers = {
  Mandalart: {
    user: async obj => {
      return await getRepository(User)
        .createQueryBuilder('user')
        .where({ id: obj.userId })
        .getOne();
    },

    todos: async obj => {
      return await getRepository(Todo)
        .createQueryBuilder('todo')
        .where({ mandalartId: obj.id })
        .getMany();
    },

    rewards: async obj => {
      return await getRepository(Reward)
        .createQueryBuilder('reward')
        .where({ mandalartId: obj.id })
        .getMany();
    },
  },
};
export default resolvers;
