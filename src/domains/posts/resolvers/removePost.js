import {Post} from '../models/index.js';

const removePost = async (parent, args, context, info) => {
  const _id = args._id;

  return await Post.findOneAndDelete({_id});
};

export default removePost;
