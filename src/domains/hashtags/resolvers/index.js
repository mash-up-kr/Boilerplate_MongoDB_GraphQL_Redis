import hashtag from './hashtag.js';
import hashtags from './hashtags.js';
import addHashtag from './addHashtag.js';

const hashtagResolvers = {
  Query: {
    hashtag,
    hashtags,
  },

  Mutation: {
    addHashtag,
  },
};

export {hashtagResolvers};
