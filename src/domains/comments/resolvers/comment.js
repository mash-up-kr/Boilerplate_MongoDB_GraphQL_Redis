import {getComment} from '../services/comment.service.js';

const resolver = async (parent, args, context, info) => {
  const {_id} = args;

  return getComment(_id);
};

export default resolver;
