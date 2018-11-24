import { gql } from 'apollo-server-express';

export default gql`
  schema {
    query: Query
  }
  type Query {
    users: [User]
    name: String
  }
  type User {
    id: ID!
    name: String!
    email: String!
    imageUrl: String
    city: String
    is_active: Int!
  }
`;
