import {Post} from '../models/post.js';

const getPosts = async ( ) => {
  const posts = await Post.find();

  /**
  const posts = [];

  for (let i = 0; i < 20; ++i) {
    posts.push({
      id: i,
      title: `title ${i}`,
      author: `author ${i}`,
      content: `content`,
      createdAt: Date.now(),
    });
  }
*/
  return posts;
};

export default getPosts;
