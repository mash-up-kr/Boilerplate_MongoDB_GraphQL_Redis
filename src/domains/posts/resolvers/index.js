import post from './post.js';
import posts from './posts.js';

import addPosts from './addPosts.js';
import editPost from './editPost.js';
import removePost from './removePost.js';

const postResolvers = {
  Query: {
    post,
    posts,
  },

  Mutation: {
    addPosts,
    editPost,
    removePost,
  },
};

export {postResolvers};
