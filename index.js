import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from './schema/type-defs.js';
import {Query} from './resolvers/Query.js'
import {Category} from './resolvers/Category.js'
import {Product} from './resolvers/Product.js'
import { categories, reviews, products } from './data/source.js';

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Category,
    Product
  }
});

const { url } = await startStandaloneServer(server, {
    context: async({_, __}) => ({
        categories, products, reviews
    }),
    listen: {port: 4000}
});

console.log(`🚀 Server ready at ${url}`);
