import {Comment} from '../models/index.js';

const replies = async (parent, args, context, info) => {
  const {_id} = args;

  const filter = {
    _id,
    isDeleted: false,
  };

  const replies = await Comment.findOne(filter).populate('replies');

  return replies;
};

export default replies;
