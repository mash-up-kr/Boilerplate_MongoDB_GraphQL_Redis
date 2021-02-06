import comment from './comment.js';
import comments from './comments.js';
import replies from './replies.js';

import addComment from './addComment.js';
import editComment from './editComment.js';
import removeComment from './removeComment.js';
import addReply from './addReply.js';

const commentResolvers = {
  Query: {
    comment,
    comments,
    replies,
  },

  Mutation: {
    addComment,
    editComment,
    removeComment,
    addReply,
  },
};

export {commentResolvers};
