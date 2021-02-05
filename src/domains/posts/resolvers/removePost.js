import {removePost} from '../services/post.service.js';

const resolver = async (parent, args, context, info) => {
  const {_id} = args;
  const {ipv4} = context;

  return await removePost(_id, ipv4);
};

export default resolver;
