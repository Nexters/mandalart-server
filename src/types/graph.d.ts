export const typeDefs = ["type Mandalart {\n  id: Int!\n  name: String!\n  content: [String]!\n  user: User!\n  startDate: String\n  endDate: String\n  createdAt: String!\n  updatedAt: String\n}\n\ntype FacebookConnectResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype Mutation {\n  FacebookConnect(firstName: String!, lastName: String!, email: String!, fbId: String!): FacebookConnectResponse!\n}\n\ntype User {\n  id: Int!\n  email: String\n  password: String\n  firstName: String\n  lastName: String\n  age: Int\n  profileImage: String\n  createdAt: String!\n  updatedAt: String\n  fullName: String\n  fbId: String\n  mandalarts: [Mandalart]\n}\n\ntype Query {\n  user: User\n}\n"];
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
  mandalarts: Array<Mandalart> | null;
}

export interface Mandalart {
  id: number;
  name: string;
  content: Array<string>;
  user: User;
  startDate: string | null;
  endDate: string | null;
  createdAt: string;
  updatedAt: string | null;
}

export interface Mutation {
  FacebookConnect: FacebookConnectResponse;
}

export interface FacebookConnectMutationArgs {
  firstName: string;
  lastName: string;
  email: string;
  fbId: string;
}

export interface FacebookConnectResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}
