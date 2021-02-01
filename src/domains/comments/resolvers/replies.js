import {getReplies} from '../services/comment.service.js';

const resolver = async (parent, args, context, info) => {
  const {_id} = args;

  return getReplies(_id);
};

export default resolver;
