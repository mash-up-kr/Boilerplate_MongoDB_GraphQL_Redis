import {Post} from '../models/index.js';

const editPost = async (parent, args, context, info) => {
  const {_id, title, author, content} = args;

  const editPost = await Post.findByIdAndUpdate(
      _id,
      {title,
        author,
        content,
      },
      {new: true,
        upsert: true,
      },
  );

  return editPost;
};

export default editPost;
