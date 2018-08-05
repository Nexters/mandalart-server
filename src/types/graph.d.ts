export const typeDefs = ["type AddMandalartResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype Mutation {\n  AddMandalart(name: String!, startDate: String!, endDate: String!): AddMandalartResponse!\n  EmailSignIn(email: String!, password: String!): EmailSignInResponse!\n  EmailSignUp(email: String!, password: String!, firstName: String!, lastName: String!, age: Int, profileImage: String): EmailSignUpResponse!\n  FacebookConnect(firstName: String!, lastName: String!, email: String!, fbId: String!): FacebookConnectResponse!\n}\n\ntype GetMyMandalartsResponse {\n  ok: Boolean!\n  error: String\n  mandalarts: [Mandalart]\n}\n\ntype Query {\n  GetMyMandalarts: GetMyMandalartsResponse!\n  GetMyProfile: GetMyProfileResponse!\n}\n\ntype Mandalart {\n  id: Int!\n  name: String!\n  startDate: String!\n  endDate: String!\n  createdAt: String!\n  updatedAt: String\n  achievementRate: Int\n  user: User!\n  todos: [Todo]!\n}\n\ntype SubTodo {\n  id: Int!\n  title: String!\n  description: String\n  isAchieved: Boolean!\n  createdAt: String!\n  updatedAt: String\n  user: User!\n  mandalart: Mandalart!\n  todo: Todo!\n}\n\ntype Todo {\n  id: Int!\n  title: String!\n  description: String\n  isAchieved: Boolean!\n  createdAt: String!\n  updatedAt: String\n  user: User!\n  mandalart: Mandalart!\n  subTodos: [SubTodo]!\n}\n\ntype EmailSignInResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype EmailSignUpResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype FacebookConnectResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype GetMyProfileResponse {\n  ok: Boolean!\n  error: String\n  user: User\n}\n\ntype User {\n  id: Int!\n  email: String\n  password: String\n  firstName: String\n  lastName: String\n  age: Int\n  profileImage: String\n  createdAt: String!\n  updatedAt: String\n  fullName: String\n  fbId: String\n  mandalarts: [Mandalart]!\n  todos: [Todo]!\n  subTodos: [SubTodo]!\n}\n"];
/* tslint:disable */

export interface Query {
  GetMyMandalarts: GetMyMandalartsResponse;
  GetMyProfile: GetMyProfileResponse;
}

export interface GetMyMandalartsResponse {
  ok: boolean;
  error: string | null;
  mandalarts: Array<Mandalart> | null;
}

export interface Mandalart {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  createdAt: string;
  updatedAt: string | null;
  achievementRate: number | null;
  user: User;
  todos: Array<Todo>;
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
  mandalarts: Array<Mandalart>;
  todos: Array<Todo>;
  subTodos: Array<SubTodo>;
}

export interface Todo {
  id: number;
  title: string;
  description: string | null;
  isAchieved: boolean;
  createdAt: string;
  updatedAt: string | null;
  user: User;
  mandalart: Mandalart;
  subTodos: Array<SubTodo>;
}

export interface SubTodo {
  id: number;
  title: string;
  description: string | null;
  isAchieved: boolean;
  createdAt: string;
  updatedAt: string | null;
  user: User;
  mandalart: Mandalart;
  todo: Todo;
}

export interface GetMyProfileResponse {
  ok: boolean;
  error: string | null;
  user: User | null;
}

export interface Mutation {
  AddMandalart: AddMandalartResponse;
  EmailSignIn: EmailSignInResponse;
  EmailSignUp: EmailSignUpResponse;
  FacebookConnect: FacebookConnectResponse;
}

export interface AddMandalartMutationArgs {
  name: string;
  startDate: string;
  endDate: string;
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
  email: string;
  fbId: string;
}

export interface AddMandalartResponse {
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
