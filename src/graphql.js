import {ApolloServer, gql} from 'apollo-server';
import domains from './domains/index.js';

const typeDefs = gql`
  scalar DateTime
  
  type Query

  type Mutation

  ${domains.postDomain.configGraphQL.typeDefs}
`;

const resolvers = {
  Query: {
    ...domains.postDomain.configGraphQL.resolvers.Query,
  },
  Mutation: {
    ...domains.postDomain.configGraphQL.resolvers.Mutation,
  },
};

const apolloServer = new ApolloServer({typeDefs, resolvers});

(async () => {
  const {url} = await apolloServer.listen(process.env.APOLLO_PORT || 4000);
  console.log(`🚀 Apollo Server ready at ${url}`);
})();

export default apolloServer;
