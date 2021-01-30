import {Comment} from '../models/index.js';

const getComments = async (parent, args, context, info) => {
  const {postId} = args;

  const filter = {
    postId,
    isDeleted: false,
  };

  const comments = await Comment.find(filter)
      .populate('comments');

  return comments;
};

export default getComments;
