import {ApolloServer, gql} from 'apollo-server';
import domains from './domains/index.js';

export default class GraphQLServer {
  constructor() {
    this.port = process.env.APOLLO_PORT;

    this.setupTypeDefs();
    this.setupResolvers();

    this.apolloServer = new ApolloServer({
      typeDefs: this.typeDefs,
      resolvers: this.resolvers,
    });
  }

  setupTypeDefs() {
    this.typeDefs = gql`
      scalar DateTime

      type Query
      type Mutation

      ${domains.postDomain.configGraphQL.typeDefs}
    `;
  }

  setupResolvers() {
    this.resolvers = {
      Query: {
        ...domains.postDomain.configGraphQL.resolvers.Query,
      },
      Mutation: {
        ...domains.postDomain.configGraphQL.resolvers.Mutation,
      },
    };
  }

  async listen() {
    const {url} = await this.apolloServer.listen(this.port);
    console.log(`🚀 Apollo Server ready at ${url}`);
  }
};
