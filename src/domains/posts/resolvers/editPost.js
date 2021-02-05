import {Post} from '../models/index.js';

const editPost = async (parent, args, context, info) => {
  const {_id, title, author, content} = args;


  const filter = {
    _id,
  };

  const update = {
    title,
    author,
    content,
  };

  const editPost = await Post.findOneAndUpdate(
      filter,
      update,
      {new: true},
  );

  return editPost;
};

export default editPost;
