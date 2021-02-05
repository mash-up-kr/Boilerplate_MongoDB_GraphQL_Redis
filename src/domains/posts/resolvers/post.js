import {Post} from '../models/post.js';

const getPost = async (parent, args, context, info) => {
  const _id = args._id;

  const post = await Post.findById(_id);

  return post;
};

export default getPost;
