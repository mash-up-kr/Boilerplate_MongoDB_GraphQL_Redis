import {ApolloServer, gql} from 'apollo-server';

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

const resolvers = {
  Query: {
    books: () => books,
  },
};

const apolloServer = new ApolloServer({typeDefs, resolvers});

(async () => {
  const {url} = await apolloServer.listen();
  console.log(`🚀 Apollo Server ready at ${url}`);
})();

export default apolloServer;
