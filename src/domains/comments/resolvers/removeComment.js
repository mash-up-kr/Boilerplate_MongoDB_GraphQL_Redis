import {Comment} from '../models/index.js';

const removeComment = async (parent, args, context, info) => {
  const {_id} = args;
  const {ipv4} = context;

  const filter = {
    _id,
    ipv4,
    isDeleted: false,
  };

  const update = {
    isDeleted: true,
    deletedAt: Date.now(),
  };

  const comment = await Comment.findOneAndUpdate(filter, update, {
    new: true,
  });

  return comment;
};

export default removeComment;
