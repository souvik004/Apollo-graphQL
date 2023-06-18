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

  type Query {
    hello: String
    #products(id: ID!): [Product!]!
    products(filter: productFilterInput): [Product!]!
    product(id: ID!): Product
    categories: [Category!]! #cannot be null
    category(id: ID!): Category
  }

  input productFilterInput {
    onSale: Boolean
    avgRating: Int
  }
`;

export default typeDefs;