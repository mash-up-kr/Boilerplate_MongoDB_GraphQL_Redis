import {Comment} from '../models/index.js';

export const addComment = async (comment, author, postId, ipv4) => {
  const newComment = await Comment.create({
    comment,
    author,
    ipv4,
    postId,
  });

  return newComment;
};

export const addReply = async (_id, comment, author, ipv4) => {
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
    post: getComment.post._id,
    isChild: true,
    parent: _id,
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

export const getComment = async (_id) => {
  const filter = {
    _id,
    isDeleted: false,
  };

  const comment = await Comment.findOne(filter)
      .populate('postId');

  return comment;
};

export const getComments = async (postId) => {
  const filter = {
    post: postId,
    isDeleted: false,
    isChild: false,
  };

  const comments = await Comment.find(filter)
      .populate('replies')
      .populate('post');

  return comments;
};

export const editComment = async (_id, comment, author, ipv4) => {
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

  const editComment = await Comment.findOneAndUpdate(
      filter,
      update,
      {
        new: true,
      },
  );

  return editComment;
};

export const removeComment = async (_id, ipv4) => {
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

export const getReplies = async (_id) => {
  const filter = {
    _id,
    isDeleted: false,
  };

  const replies = await Comment.findOne(filter).populate('replies');

  return replies;
};
