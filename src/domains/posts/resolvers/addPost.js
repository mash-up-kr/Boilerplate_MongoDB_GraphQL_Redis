import {addPost} from '../services/post.service.js';

const resolver = async (parent, args, context, info) => {
  const {title, author, content} = args.input;
  const {ipv4} = context;

  return await addPost(title, author, content, ipv4);
};

export default resolver;
