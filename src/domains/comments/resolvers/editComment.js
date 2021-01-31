import {Comment} from '../models/index.js';

const editComment = async (parent, args, context, info) => {
  const {_id, comment, author} = args;
  const {ipv4} = context;

  const filter = {
    _id,
    ipv4,
    isDeleted: false,
  };

  const update = {
    comment,
    author,
    updatedAt: Date.now(),
  };

  const editComment = await Comment.findOneAndUpdate(filter, update, {
    new: true,
  });

  return editComment;
};

export default editComment;
