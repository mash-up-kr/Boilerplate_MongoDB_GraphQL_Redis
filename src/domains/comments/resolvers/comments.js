import {getComments} from '../services/comment.service.js';

const resolver = async (parent, args, context, info) => {
  const {postId} = args;

  return getComments(postId);
};

export default resolver;
