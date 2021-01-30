import {Comment} from '../models/index.js';

const addReplies = async (parent, args, context, info) => {
  const {comment, author, _id} = args;
  const {ipv4} = context;

  const filter = {
    _id,
    isDeleted: false,
    isChild: false,
  };

  const session = await Comment.startSession();
  session.startTransaction();

  const getComment = await Comment.findOne(filter);

  const pushItem = {
    comment,
    author,
    ipv4,
    postId: getComment.postId,
    isChild: true,
  };

  const update = {
    $push: {
      replies: await Comment.create(pushItem),
    },
  };

  const updateComment = await Comment.findOneAndUpdate(filter, update, {
    new: true,
  }).populate('replies');

  await session.abortTransaction();
  session.endSession();

  return updateComment;
};

export default addReplies;
