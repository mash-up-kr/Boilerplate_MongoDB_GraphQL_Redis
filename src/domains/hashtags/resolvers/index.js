import hashtag from './hashtag.js';
import hashtags from './hashtags.js';
import createHashtag from './createHashtag.js';
// import addHashtag from './addHashtag.js';

const hashtagResolvers = {
  Query: {
    hashtag,
    hashtags,
  },

  Mutation: {
    createHashtag,
    // addHashtag,
  },
};

export {hashtagResolvers};
