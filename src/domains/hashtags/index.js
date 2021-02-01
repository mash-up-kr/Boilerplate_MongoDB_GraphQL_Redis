import {hashtagTypeDefs} from './models/index.js';
import {hashtagResolvers} from './resolvers/index.js';

const configGraphQL = {
  typeDefs: hashtagTypeDefs,
  resolvers: hashtagResolvers,
};

export default {
  configGraphQL,
};
