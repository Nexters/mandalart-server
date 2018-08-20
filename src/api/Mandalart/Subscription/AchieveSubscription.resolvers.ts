import { withFilter } from "graphql-yoga";
// import { getRepository } from 'typeorm';

const resolvers = {
  Subscription: {
    AchieveSubscription: {
      subscribe: withFilter(
        (_, __, { pubSub }) => pubSub.asyncIterator("mandalartAchieveCalc"),
        (payload, _) => {
          const {
            AchieveSubscription: { id }
          } = payload;
          // async _ =>
          // await getRepository(User)
          // .createQueryBuilder('user')
          // .getMany()
          console.log(id, payload);
          return true;
        }
      )
    }
  }
};

export default resolvers;
