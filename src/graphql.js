import {ApolloServer, gql} from 'apollo-server';
import domains from './domains/index.js';

const typeDefs = gql`
  scalar DateTime
  
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }

  type Mutation {
    addBooks: Book
  }

  ${domains.postDomain.configGraphQL.typeDefs}
`;

// const books = [
//   {
//     title: 'The Awakening',
//     author: 'Kate Chopin',
//   },
//   {
//     title: 'City of Glass',
//     author: 'Paul Auster',
//   },
// ];

const resolvers = {
  Query: {
    books: () => books,
    ...domains.postDomain.configGraphQL.resolvers.Query,
  },
  Mutation: {
    ...domains.postDomain.configGraphQL.resolvers.Mutation,
  },
};

const apolloServer = new ApolloServer({typeDefs, resolvers});

(async () => {
  const {url} = await apolloServer.listen();
  console.log(`🚀 Apollo Server ready at ${url}`);
})();

export default apolloServer;
