import post from './post.js';
import posts from './posts.js';

import addPost from './addPost.js';
import editPost from './editPost.js';
import removePost from './removePost.js';

const postResolvers = {
  Query: {
    post,
    posts,
  },

  Mutation: {
    addPost,
    editPost,
    removePost,
  },
};

export {postResolvers};
