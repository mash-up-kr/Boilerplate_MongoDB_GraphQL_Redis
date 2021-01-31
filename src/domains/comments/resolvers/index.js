import comment from './comment.js';
import comments from './comments.js';
import replies from './replies.js';

import addComments from './addComments.js';
import editComment from './editComment.js';
import removeComment from './removeComment.js';
import addReplies from './addReplies.js';

const commentResolvers = {
  Query: {
    comment,
    comments,
    replies,
  },

  Mutation: {
    addComments,
    editComment,
    removeComment,
    addReplies,
  },
};

export {commentResolvers};
