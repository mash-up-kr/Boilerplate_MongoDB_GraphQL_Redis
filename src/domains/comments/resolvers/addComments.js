import {Comment} from '../models/index.js';

const addComments = async (parent, args, context, info) => {
  const {comment, author, postId} = args;
  const {ipv4} = context;

  const newComment = await Comment.create({
    comment,
    author,
    ipv4,
    postId,
  });

  return newComment;
};

export default addComments;
