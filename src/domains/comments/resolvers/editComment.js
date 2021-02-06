import {editComment} from '../services/comment.service.js';

const resolver = async (parent, args, context, info) => {
  const {_id, comment, author} = args.input;
  const {ipv4} = context;

  return editComment(_id, comment, author, ipv4);
};

export default resolver;
