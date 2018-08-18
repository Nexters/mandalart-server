import Rating from "../../../entities/Rating";
import User from "../../../entities/User";
import {
  EditRatingMutationArgs,
  EditRatingResponse
} from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";
import cleanNullArgs from "../../../utils/cleanNullArg";
import privateResolver from "../../../utils/privateResolver";

const resolvers: Resolvers = {
  Mutation: {
    EditRating: privateResolver(
      async (
        _,
        args: EditRatingMutationArgs,
        { req }
      ): Promise<EditRatingResponse> => {
        const user: User = req.user;
        try {
          const rating = await Rating.findOne({ id: args.ratingId });
          if (rating) {
            if (rating.userId === user.id) {
              const notNull = cleanNullArgs(args);
              await Rating.update({ id: args.ratingId }, { ...notNull });
              return {
                ok: true,
                error: null
              };
            } else {
              return {
                ok: false,
                error: "Not Authorized"
              };
            }
          } else {
            return {
              ok: false,
              error: "Rating not found"
            };
          }
        } catch (error) {
          return {
            ok: false,
            error: error.message
          };
        }
      }
    )
  }
};
export default resolvers;
