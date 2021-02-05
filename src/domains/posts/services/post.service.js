import {Post} from '../models/index.js';
import * as hashTagService from '../../hashtags/services/hashtag.service.js';

export const addPost = async (title, author, content, ipv4) => {
  const parsedHashtags = parseHashtags(content);

  let hashtags = null;
  try {
    hashtags = await hashTagService.createBulkHashtag(parsedHashtags);
  } catch (error) {
    hashtags = await hashTagService.getHashtagsBytitleArray(parsedHashtags);
  }

  const newPost = await Post.create({
    title,
    author,
    content,
    ipv4,
    hashtags,
  });

  return newPost;
};

const parseHashtags = (content) => {
  const regexExpression = /#[^\s#]+/g;
  const parsedHashtags = content.match(
      regexExpression,
  ).map(
      (tag) => tag.slice(1).toLowerCase(),
  );
  return parsedHashtags;
};

export const editPost = async (_id, title, author, content, ipv4) => {
  const filter = {
    _id,
    ipv4,
    isDeleted: false,
  };

  const update = {
    title,
    author,
    content,
    updatedAt: Date.now(),
  };

  const editPost = await Post.findOneAndUpdate(
      filter,
      update,
      {
        new: true,
      },
  );

  return editPost;
};

export const getPost = async (_id) => {
  const filter = {
    _id,
    isDeleted: false,
  };

  const post = await Post.findOne(filter)
      .populate('comments')
      .populate('hashtags');

  return post;
};

export const getPosts = async () => {
  const filter = {
    isDeleted: false,
  };

  const posts = await Post.find(filter)
      .populate('comments')
      .populate('hashtags');

  return posts;
};

export const removePost = async (_id, ipv4) => {
  const filter = {
    _id,
    ipv4,
    isDeleted: false,
  };

  const update = {
    isDeleted: true,
    deletedAt: Date.now(),
  };

  const post = await Post.findOneAndUpdate(filter, update, {
    new: true,
  });

  return post;
};
