import {Post} from '../models/index.js';

const addPosts = async (_, {
  title,
  content,
  createdAt,
}) => {
  const newPost = await Post.create({
    title,
    content,
    createdAt,
  });

  return newPost;
};

export default addPosts;
