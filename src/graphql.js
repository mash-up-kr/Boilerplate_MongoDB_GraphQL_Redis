import {ApolloServer, gql} from 'apollo-server';

import domains from './domains/index.js';

export default class GraphQLServer {
  constructor() {
    this.setupPort();

    this.setupTypeDefs();
    this.setupResolvers();

    this.setupApolloServer();
  }

  setupPort() {
    this.port = process.env.APOLLO_PORT;
  }

  setupTypeDefs() {
    this.typeDefs = gql`
      scalar DateTime

      type Query
      type Mutation

      ${domains.postDomain.configGraphQL.typeDefs}
      ${domains.commentDomain.configGraphQL.typeDefs}
    `;
  }

  setupResolvers() {
    this.resolvers = {
      Query: {
        ...domains.postDomain.configGraphQL.resolvers.Query,
        ...domains.commentDomain.configGraphQL.resolvers.Query,
      },
      Mutation: {
        ...domains.postDomain.configGraphQL.resolvers.Mutation,
        ...domains.commentDomain.configGraphQL.resolvers.Mutation,
      },
    };
  }

  setupApolloServer() {
    this.apolloServer = new ApolloServer({
      typeDefs: this.typeDefs,
      resolvers: this.resolvers,
      context: this.context,
    });
  }

  context({req}) {
    const ipv4 = req.connection.remoteAddress;
    return {ipv4};
  }

  async listen() {
    const {url} = await this.apolloServer.listen(this.port);
    console.log(`🚀 Apollo Server ready at ${url}`);
  }
};
