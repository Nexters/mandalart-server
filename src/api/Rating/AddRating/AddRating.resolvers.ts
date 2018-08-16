import Rating from '../../../entities/Rating';
import User from '../../../entities/User';
import {
  AddRatingMutationArgs,
  AddRatingResponse,
} from '../../../types/graph';
import { Resolvers } from '../../../types/resolvers';
import privateResolver from '../../../utils/privateResolver';

const resolvers: Resolvers = {
  Mutation: {
    AddRating: privateResolver(
      async (
        _,
        args: AddRatingMutationArgs,
        { req }
      ): Promise<AddRatingResponse> => {
        const user: User = req.user;
        const userId: number = req.user.userId;
        try {
          await Rating.create({ ...args, user, userId }).save();
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
