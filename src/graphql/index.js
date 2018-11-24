import { gql } from 'apollo-server-express';
import resolvers from './resolvers';

export const typeDefs = gql`
  schema {
    query: Query
  }
  type Query {
    hello: String
    name: String
  }
`;

export { resolvers };
