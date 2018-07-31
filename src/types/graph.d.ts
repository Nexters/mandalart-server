export const typeDefs = ["type Mandalart {\n  id: Int!\n  name: String!\n  content: [String]!\n  createdAt: String!\n  updatedAt: String\n}\n\ntype User {\n  id: Int!\n  email: String\n  password: String\n  firstName: String\n  lastName: String\n  age: Int\n  profileImage: String\n  createdAt: String!\n  updatedAt: String\n  fullName: String\n}\n\ntype Query {\n  user: User\n}\n"];
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
}

export interface Mandalart {
  id: number;
  name: string;
  content: Array<string>;
  createdAt: string;
  updatedAt: string | null;
}
