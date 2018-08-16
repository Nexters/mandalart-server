import Rating from '../../../entities/Rating';
import User from '../../../entities/User';
import {
  DeleteRatingMutationArgs,
  DeleteRatingResponse,
} from '../../../types/graph';
import { Resolvers } from '../../../types/resolvers';
import privateResolver from '../../../utils/privateResolver';

const resolvers: Resolvers = {
  Mutation: {
    DeleteRating: privateResolver(
      async (
        _,
        args: DeleteRatingMutationArgs,
        { req }
      ): Promise<DeleteRatingResponse> => {
        const user: User = req.user;
        try {
          const rating = await Rating.findOne({ id: args.ratingId });
          if (rating) {
            if (rating.userId === user.id) {
              rating.remove();
              return {
                ok: true,
                error: null,
              };
            } else {
              return {
                ok: false,
                error: 'Not Authorized',
              };
            }
          } else {
            return {
              ok: false,
              error: 'Mandalart not found',
            };
          }
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
