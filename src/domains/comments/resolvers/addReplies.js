import {Comment} from '../models/index.js';

const addReplies = async (parent, args, context, info) => {
  const {comment, author, _id} = args;
  const {ipv4} = context;

  const filter = {
    _id,
    isDeleted: false,
  };

  const pushItem = {
    comment,
    author,
    ipv4,
  };

  const update = {
    $push: {
      replies: pushItem,
    },
  };

  const newComment = await Comment.findOneAndUpdate(filter, update);

  console.log(newComment);

  return newComment;
};

export default addReplies;
