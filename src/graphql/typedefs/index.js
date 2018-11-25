import { gql } from 'apollo-server-express';

export default gql`
  schema {
    query: Query
  }
  type Query {
    users: [User]
    sellers: [Seller]
    products(limit: Int, offset: Int): [Product]
    reviews: [Review]
  }
  type User {
    id: ID!
    name: String!
    email: String!
    imageUrl: String
    city: String
    isActive: Int!
    createdAt: String!
    updatedAt: String!
    reviews: [Review]
  }
  type Seller {
    id: ID!
    name: String!
    email: String!
    imageUrl: String
    city: String
    isActive: Int!
    createdAt: String!
    updatedAt: String!
    products: [Product]
  }
  type Product {
    id: ID!
    name: String!
    description: String!
    price: Float!
    isActive: Int!
    createdAt: String!
    updatedAt: String!
    seller: Seller
  }
  type Review {
    id: ID!
    title: String!
    description: String!
    user: User!
    product: Product!
    isActive: Int!
    createdAt: String!
    updatedAt: String!
  }
`;
