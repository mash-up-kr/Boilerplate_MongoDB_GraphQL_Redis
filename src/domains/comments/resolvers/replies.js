import {Comment} from '../models/index.js';

const replies = async (parent, args, context, info) => {
  const {_id} = args;

  const filter = {
    _id,
    isDeleted: false,
  };

  const comments = await Comment.find(filter)
      .populate('replies');

  return comments;
};

export default replies;
