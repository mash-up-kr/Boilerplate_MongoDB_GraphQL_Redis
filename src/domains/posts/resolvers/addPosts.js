import {Post} from '../models/index.js';

const addPosts = async (parent, args, context, info) => {
  const {title, author, content} = args;
  const session = await Post.startSession();
  session.startTransaction();

  const newPost = new Post({
    title,
    author,
    content,
  });

  const result = [];
  result.push(await newPost.save({session}));

  await session.commitTransaction();
  session.endSession();

  console.log(newPost);
  return result;
};

export default addPosts;
