export const typeDefs = ["type Mandalart {\n  id: Int!\n  name: String!\n  startDate: String\n  endDate: String\n  createdAt: String!\n  updatedAt: String\n  achievementRate: Int!\n  user: User!\n  todos: [Todo]!\n}\n\ntype Todo {\n  id: Int!\n  title: String!\n  description: String\n  isAchieved: Boolean!\n  createdAt: String!\n  updatedAt: String\n  user: User!\n  mandalart: Mandalart!\n}\n\ntype EmailSignInResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype Mutation {\n  EmailSignIn(email: String!, password: String!): EmailSignInResponse!\n  EmailSignUp(email: String!, password: String!, firstName: String!, lastName: String!, age: Int, profileImage: String): EmailSignUpResponse!\n  FacebookConnect(firstName: String!, lastName: String!, email: String!, fbId: String!): FacebookConnectResponse!\n}\n\ntype EmailSignUpResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype FacebookConnectResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype User {\n  id: Int!\n  email: String\n  password: String\n  firstName: String\n  lastName: String\n  age: Int\n  profileImage: String\n  createdAt: String!\n  updatedAt: String\n  fullName: String\n  fbId: String\n  mandalarts: [Mandalart]!\n  todos: [Todo]!\n}\n\ntype Query {\n  user: User\n}\n"];
/* tslint:disable */

export interface Query {
  user: User | null;
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
}

export interface Mandalart {
  id: number;
  name: string;
  startDate: string | null;
  endDate: string | null;
  createdAt: string;
  updatedAt: string | null;
  achievementRate: number;
  user: User;
  todos: Array<Todo>;
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
}

export interface Mutation {
  EmailSignIn: EmailSignInResponse;
  EmailSignUp: EmailSignUpResponse;
  FacebookConnect: FacebookConnectResponse;
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
