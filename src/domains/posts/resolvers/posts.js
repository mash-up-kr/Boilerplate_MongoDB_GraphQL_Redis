import {getPosts} from '../services/post.service.js';

const resolver = async (parent, args, context, info) => {
  return await getPosts();
};

export default resolver;
