import {editPost} from '../services/post.service.js';

const resolver = async (parent, args, context, info) => {
  const {_id, title, author, content} = args;
  const {ipv4} = context;

  return await editPost(_id, title, author, content, ipv4);
};

export default resolver;
