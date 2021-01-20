import {initializeDotEnv} from './dotenv.js';
import ExpressServer from './app.js';
import GraphQLServer from './graphql.js';
import MongoDB from './mongodb.js';

initializeDotEnv();

export const expressServer = new ExpressServer();

export const graphqlServer = new GraphQLServer();
(async () => {
  await graphqlServer.listen();
})();

export const mongoDB = new MongoDB();
