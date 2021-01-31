import {Comment} from '../models/index.js';

const getComment = async (parent, args, context, info) => {
  const {_id} = args;

  const filter = {
    _id,
    isDeleted: false,
  };

  const comment = await Comment.findOne(filter)
      .populate('postId');

  return comment;
};

export default getComment;
