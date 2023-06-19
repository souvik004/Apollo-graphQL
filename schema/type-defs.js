const typeDefs = `#graphql
  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    image: String!
    onSale: Boolean!
    category: Category
    reviews: [Review!]
  }

  type Category {
    id: ID!
    name: String!
    #products: [Product!]! # want to retrieve products for each category
    products(filter: productFilterInput): [Product!]!
  }

  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
  }

  type Mutation {
    addCategory(input: AddCategoryInput!): Category!
  }

  type User {
     name: String!
     email: String!
     nationality: Nationality!
  }

  type Query {
    hello: String
    #products(id: ID!): [Product!]!
    products(filter: productFilterInput): [Product!]!
    product(id: ID!): Product
    categories: [Category!]! #cannot be null
    category(id: ID!): Category
    users: [User!]! 
    user(email: String!): User
  }

  #in input no other type can be passed as argument
  input productFilterInput {
    onSale: Boolean
    avgRating: Int
    #avgRating: Int = 3 incase of you want to use deafult value for a input field 
  }

  input AddCategoryInput {
    name: String!
  }

  enum Nationality {
    INDIA 
    US
    UK 
    CHINA 
  }
`;

export default typeDefs;