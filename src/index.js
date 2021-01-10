import expressServer from './app.js';
import apolloServer from './graphql.js';

expressServer.get();
expressServer.listen();
expressServer.setUpMiddlewares();

(async () => {
  const {url} = await apolloServer.listen();
  console.log(`🚀 Apollo Server ready at ${url}`);
})();
