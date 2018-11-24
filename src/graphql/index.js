import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  schema {
    query: Query
  }
  type Query {
    hello: String
    name: String
  }
`;

export const resolvers = {
  Query: {
    hello() {
      return 'Hello World';
    },
    name() {
      return 'GraphQL';
    },
  },
};
