import {commentTypeDefs} from './models/index.js';
import {commentResolvers} from './resolvers/index.js';

const configGraphQL = {
  typeDefs: commentTypeDefs,
  resolvers: commentResolvers,
};

export default {
  configGraphQL,
};
