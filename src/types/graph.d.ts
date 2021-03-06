export const typeDefs = ["type AddMandalartResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype Mutation {\n  AddMandalart(name: String!, startDate: String!, endDate: String!, goal: String!): AddMandalartResponse!\n  DeleteMandalart(mandalartId: Int!): DeleteMandalartResponse!\n  EditMandalart(mandalartId: Int!, name: String, endDate: String, goal: String): EditMandalartResponse!\n  AddReward(mandalartId: Int!, percentage: Int!, message: String!): AddRewardResponse!\n  DeleteReward(rewardId: Int!): DeleteRewardResponse!\n  EditReward(rewardId: Int!, mandalartId: Int!, percentage: Int!, message: String): EditRewardResponse!\n  AddSubTodo(todoId: Int!, title: String!, startDate: String!, endDate: String!, comments: [String], isAchieved: Boolean! = false): AddSubTodoResponse!\n  DeleteSubTodo(subTodoId: Int!): DeleteSubTodoResponse!\n  EditSubTodo(subTodoId: Int!, title: String, endDate: String, comments: [String], isAchieved: Boolean!): EditSubTodoResponse!\n  AddTodo(mandalartId: Int!, title: String!, startDate: String!, endDate: String!, comments: [String], isAchieved: Boolean! = false): AddTodoResponse!\n  DeleteTodo(todoId: Int!): DeleteTodoResponse!\n  EditTodo(todoId: Int!, title: String, endDate: String, comments: [String], isAchieved: Boolean!): EditTodoResponse!\n  EmailSignIn(email: String!, password: String!): EmailSignInResponse!\n  EmailSignUp(email: String!, password: String!, firstName: String!, lastName: String!, age: Int, profileImage: String): EmailSignUpResponse!\n  FacebookConnect(firstName: String!, lastName: String!, email: String, fbId: String!): FacebookConnectResponse!\n}\n\ntype DeleteMandalartResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype EditMandalartResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype GetMandalartResponse {\n  ok: Boolean!\n  error: String\n  mandalart: Mandalart\n}\n\ntype Query {\n  GetMandalart(mandalartId: Int!): GetMandalartResponse\n  GetMyMandalarts: GetMyMandalartsResponse!\n  GetRewardsByMandalartId(mandalartId: Int!): GetRewardsByMandalartIdResponse!\n  reward(id: Int!): Reward\n  GetSubTodosByTodoId(todoId: Int!): GetSubTodosByTodoIdResponse!\n  subTodo(id: Int!): SubTodo\n  GetTodosByMandalartId(mandalartId: Int!): GetTodosByMandalartIdResponse!\n  todo(id: Int!): Todo\n  GetMyProfile: GetMyProfileResponse!\n  users: [User!]!\n}\n\ntype GetMyMandalartsResponse {\n  ok: Boolean!\n  error: String\n  mandalarts: [Mandalart]\n}\n\ntype Mandalart {\n  id: Int!\n  name: String!\n  startDate: String!\n  endDate: String!\n  goal: String\n  createdAt: String!\n  updatedAt: String\n  achievementRate: Float\n  user: User!\n  todos: [Todo]\n  rewards: [Reward]\n}\n\ntype Subscription {\n  AchieveSubscription: SubTodo\n}\n\ntype AddRewardResponse {\n  ok: Boolean!\n  error: String\n  reward: Reward\n}\n\ntype DeleteRewardResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype EditRewardResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype GetRewardsByMandalartIdResponse {\n  ok: Boolean!\n  error: String\n  rewards: [Reward]\n}\n\ntype Reward {\n  id: Int!\n  mandalart: Mandalart!\n  percentage: Int!\n  message: String!\n  createdAt: String!\n}\n\ntype AddSubTodoResponse {\n  ok: Boolean!\n  error: String\n  subTodo: SubTodo\n}\n\ntype DeleteSubTodoResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype EditSubTodoResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype GetSubTodosByTodoIdResponse {\n  ok: Boolean!\n  error: String\n  subTodos: [SubTodo]\n}\n\ntype SubTodo {\n  id: Int!\n  todoId: Int\n  title: String!\n  startDate: String!\n  endDate: String!\n  comments: [String]\n  isAchieved: Boolean!\n  createdAt: String!\n  updatedAt: String\n  user: User!\n  todo: Todo!\n}\n\ntype AddTodoResponse {\n  ok: Boolean!\n  error: String\n  todo: Todo\n}\n\ntype DeleteTodoResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype EditTodoResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype GetTodosByMandalartIdResponse {\n  ok: Boolean!\n  error: String\n  todos: [Todo]\n}\n\ntype Todo {\n  id: Int!\n  mandalartId: Int\n  title: String!\n  startDate: String!\n  endDate: String!\n  comments: [String]\n  isAchieved: Boolean!\n  createdAt: String!\n  updatedAt: String\n  user: User!\n  mandalart: Mandalart!\n  subTodos: [SubTodo]\n}\n\ntype EmailSignInResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype EmailSignUpResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype FacebookConnectResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype GetMyProfileResponse {\n  ok: Boolean!\n  error: String\n  user: User\n}\n\ntype User {\n  id: Int!\n  email: String\n  password: String\n  firstName: String\n  lastName: String\n  age: Int\n  profileImage: String\n  createdAt: String!\n  updatedAt: String\n  fullName: String\n  fbId: String\n  mandalarts: [Mandalart]\n  todos: [Todo]!\n  subTodos: [SubTodo]!\n}\n"];
/* tslint:disable */

export interface Query {
  GetMandalart: GetMandalartResponse | null;
  GetMyMandalarts: GetMyMandalartsResponse;
  GetRewardsByMandalartId: GetRewardsByMandalartIdResponse;
  reward: Reward | null;
  GetSubTodosByTodoId: GetSubTodosByTodoIdResponse;
  subTodo: SubTodo | null;
  GetTodosByMandalartId: GetTodosByMandalartIdResponse;
  todo: Todo | null;
  GetMyProfile: GetMyProfileResponse;
  users: Array<User>;
}

export interface GetMandalartQueryArgs {
  mandalartId: number;
}

export interface GetRewardsByMandalartIdQueryArgs {
  mandalartId: number;
}

export interface RewardQueryArgs {
  id: number;
}

export interface GetSubTodosByTodoIdQueryArgs {
  todoId: number;
}

export interface SubTodoQueryArgs {
  id: number;
}

export interface GetTodosByMandalartIdQueryArgs {
  mandalartId: number;
}

export interface TodoQueryArgs {
  id: number;
}

export interface GetMandalartResponse {
  ok: boolean;
  error: string | null;
  mandalart: Mandalart | null;
}

export interface Mandalart {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  goal: string | null;
  createdAt: string;
  updatedAt: string | null;
  achievementRate: number | null;
  user: User;
  todos: Array<Todo> | null;
  rewards: Array<Reward> | null;
}

export interface User {
  id: number;
  email: string | null;
  password: string | null;
  firstName: string | null;
  lastName: string | null;
  age: number | null;
  profileImage: string | null;
  createdAt: string;
  updatedAt: string | null;
  fullName: string | null;
  fbId: string | null;
  mandalarts: Array<Mandalart> | null;
  todos: Array<Todo>;
  subTodos: Array<SubTodo>;
}

export interface Todo {
  id: number;
  mandalartId: number | null;
  title: string;
  startDate: string;
  endDate: string;
  comments: Array<string> | null;
  isAchieved: boolean;
  createdAt: string;
  updatedAt: string | null;
  user: User;
  mandalart: Mandalart;
  subTodos: Array<SubTodo> | null;
}

export interface SubTodo {
  id: number;
  todoId: number | null;
  title: string;
  startDate: string;
  endDate: string;
  comments: Array<string> | null;
  isAchieved: boolean;
  createdAt: string;
  updatedAt: string | null;
  user: User;
  todo: Todo;
}

export interface Reward {
  id: number;
  mandalart: Mandalart;
  percentage: number;
  message: string;
  createdAt: string;
}

export interface GetMyMandalartsResponse {
  ok: boolean;
  error: string | null;
  mandalarts: Array<Mandalart> | null;
}

export interface GetRewardsByMandalartIdResponse {
  ok: boolean;
  error: string | null;
  rewards: Array<Reward> | null;
}

export interface GetSubTodosByTodoIdResponse {
  ok: boolean;
  error: string | null;
  subTodos: Array<SubTodo> | null;
}

export interface GetTodosByMandalartIdResponse {
  ok: boolean;
  error: string | null;
  todos: Array<Todo> | null;
}

export interface GetMyProfileResponse {
  ok: boolean;
  error: string | null;
  user: User | null;
}

export interface Mutation {
  AddMandalart: AddMandalartResponse;
  DeleteMandalart: DeleteMandalartResponse;
  EditMandalart: EditMandalartResponse;
  AddReward: AddRewardResponse;
  DeleteReward: DeleteRewardResponse;
  EditReward: EditRewardResponse;
  AddSubTodo: AddSubTodoResponse;
  DeleteSubTodo: DeleteSubTodoResponse;
  EditSubTodo: EditSubTodoResponse;
  AddTodo: AddTodoResponse;
  DeleteTodo: DeleteTodoResponse;
  EditTodo: EditTodoResponse;
  EmailSignIn: EmailSignInResponse;
  EmailSignUp: EmailSignUpResponse;
  FacebookConnect: FacebookConnectResponse;
}

export interface AddMandalartMutationArgs {
  name: string;
  startDate: string;
  endDate: string;
  goal: string;
}

export interface DeleteMandalartMutationArgs {
  mandalartId: number;
}

export interface EditMandalartMutationArgs {
  mandalartId: number;
  name: string | null;
  endDate: string | null;
  goal: string | null;
}

export interface AddRewardMutationArgs {
  mandalartId: number;
  percentage: number;
  message: string;
}

export interface DeleteRewardMutationArgs {
  rewardId: number;
}

export interface EditRewardMutationArgs {
  rewardId: number;
  mandalartId: number;
  percentage: number;
  message: string | null;
}

export interface AddSubTodoMutationArgs {
  todoId: number;
  title: string;
  startDate: string;
  endDate: string;
  comments: Array<string> | null;
  isAchieved: boolean;
}

export interface DeleteSubTodoMutationArgs {
  subTodoId: number;
}

export interface EditSubTodoMutationArgs {
  subTodoId: number;
  title: string | null;
  endDate: string | null;
  comments: Array<string> | null;
  isAchieved: boolean;
}

export interface AddTodoMutationArgs {
  mandalartId: number;
  title: string;
  startDate: string;
  endDate: string;
  comments: Array<string> | null;
  isAchieved: boolean;
}

export interface DeleteTodoMutationArgs {
  todoId: number;
}

export interface EditTodoMutationArgs {
  todoId: number;
  title: string | null;
  endDate: string | null;
  comments: Array<string> | null;
  isAchieved: boolean;
}

export interface EmailSignInMutationArgs {
  email: string;
  password: string;
}

export interface EmailSignUpMutationArgs {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  age: number | null;
  profileImage: string | null;
}

export interface FacebookConnectMutationArgs {
  firstName: string;
  lastName: string;
  email: string | null;
  fbId: string;
}

export interface AddMandalartResponse {
  ok: boolean;
  error: string | null;
}

export interface DeleteMandalartResponse {
  ok: boolean;
  error: string | null;
}

export interface EditMandalartResponse {
  ok: boolean;
  error: string | null;
}

export interface AddRewardResponse {
  ok: boolean;
  error: string | null;
  reward: Reward | null;
}

export interface DeleteRewardResponse {
  ok: boolean;
  error: string | null;
}

export interface EditRewardResponse {
  ok: boolean;
  error: string | null;
}

export interface AddSubTodoResponse {
  ok: boolean;
  error: string | null;
  subTodo: SubTodo | null;
}

export interface DeleteSubTodoResponse {
  ok: boolean;
  error: string | null;
}

export interface EditSubTodoResponse {
  ok: boolean;
  error: string | null;
}

export interface AddTodoResponse {
  ok: boolean;
  error: string | null;
  todo: Todo | null;
}

export interface DeleteTodoResponse {
  ok: boolean;
  error: string | null;
}

export interface EditTodoResponse {
  ok: boolean;
  error: string | null;
}

export interface EmailSignInResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface EmailSignUpResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface FacebookConnectResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface Subscription {
  AchieveSubscription: SubTodo | null;
}
