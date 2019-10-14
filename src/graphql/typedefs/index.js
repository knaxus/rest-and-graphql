import { gql } from 'apollo-server-express';

export default gql`
  schema {
    query: Query
    mutation: Mutation
  }
  type Query {
    users(limit: Int, offset: Int, name: String): [User]
    sellers(limit: Int, offset: Int): [Seller]
    products(limit: Int, offset: Int): [Product]
    reviews(limit: Int, offset: Int): [Review]
  }
  type Mutation {
    addProduct(name: String,description: String, price:Float): Product
    updateProduct(id:ID, name: String,description: String, price:Float): Product
    deleteProduct(id:ID) : Product
    addReview(userId: String, productId: String, title: String, description:String): Review
    updateReview(id:ID, userId: String, productId: String, title: String, description:String): Review
    deleteReview(id:ID) : Review
    addSeller(name:String, email:String, city: String, imageUrl: String) : Seller
    updateSeller(id:ID, name:String, email:String, city: String, imageUrl: String) : Seller
    deleteSeller(id:ID) : Seller
    addUser(name:String, email:String, city: String, imageUrl: String) : User
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
    products(limit: Int, offset: Int): [Product]
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
