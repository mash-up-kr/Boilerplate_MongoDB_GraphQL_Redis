import dotenv from 'dotenv';
dotenv.config();

import expressServer from './app.js';
import apolloServer from './graphql.js';

export default {
  expressServer,
  apolloServer,
};
