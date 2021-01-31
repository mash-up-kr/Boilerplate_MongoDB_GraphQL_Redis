import {addComment} from '../services/comment.service.js';

const resolver = async (parent, args, context, info) => {
  const {comment, author, postId} = args;
  const {ipv4} = context;

  return addComment(comment, author, postId, ipv4);
};

export default resolver;
