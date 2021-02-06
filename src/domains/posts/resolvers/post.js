import {getPost} from '../services/post.service.js';

const resolver = async (parent, args, context, info) => {
  const {_id} = args;

  return await getPost(_id);
};

export default resolver;
