import User from '../../../entities/User';
import { GetMyRatingResponse } from '../../../types/graph';
import { Resolvers } from '../../../types/resolvers';
import privateResolver from '../../../utils/privateResolver';

const resolvers: Resolvers = {
  Query: {
    GetMyRating: privateResolver(
      async (_, __, { req }): Promise<GetMyRatingResponse> => {
        try {
          const user = await User.findOne(
            { id: req.user.id },
            { relations: ['rating'] }
          );
          if (user) {
            return {
              ok: true,
              error: null,
              rating: user.rating,
            };
          } else {
            return {
              ok: false,
              error: 'User not found',
              rating: null,
            };
          }
        } catch (error) {
          return {
            ok: false,
            error: error.message,
            rating: null,
          };
        }
      }
    ),
  },
};
export default resolvers;
