import {postTypeDefs} from './models/index.js';
import {postResolvers} from './resolvers/index.js';

const configGraphQL = {
  typeDefs: postTypeDefs,
  resolvers: postResolvers,
};

export default {
  configGraphQL,
};
