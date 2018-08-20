import SubTodo from "../../../entities/SubTodo";
import User from "../../../entities/User";
import {
  EditSubTodoMutationArgs,
  EditSubTodoResponse
} from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";
import cleanNullArgs from "../../../utils/cleanNullArg";
import privateResolver from "../../../utils/privateResolver";

const resolvers: Resolvers = {
  Mutation: {
    EditSubTodo: privateResolver(
      async (
        _,
        args: EditSubTodoMutationArgs,
        { req, pubSub }
      ): Promise<EditSubTodoResponse> => {
        const user: User = req.user;
        try {
          const subTodo = await SubTodo.findOne({ id: args.subTodoId });
          if (subTodo) {
            if (subTodo.userId === user.id) {
              const notNull = cleanNullArgs(args);
              await SubTodo.update({ id: args.subTodoId }, { ...notNull });
              const updatedSubTodo = await SubTodo.findOne({ id: args.subTodoId });
              pubSub.publish("mandalartAchieveCalc", {
                AchieveSubscription: updatedSubTodo
              });
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
              error: "SubTodo not found"
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
