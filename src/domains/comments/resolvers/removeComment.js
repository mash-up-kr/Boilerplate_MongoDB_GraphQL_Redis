import {removeComment} from '../services/comment.service.js';

const resolver = async (parent, args, context, info) => {
  const {_id} = args;
  const {ipv4} = context;

  return removeComment(_id, ipv4);
};

export default resolver;
