import {addReply} from '../services/comment.service.js';

const resolver = async (parent, args, context, info) => {
  const {_id, comment, author} = args;
  const {ipv4} = context;

  return addReply(_id, comment, author, ipv4);
};

export default resolver;
