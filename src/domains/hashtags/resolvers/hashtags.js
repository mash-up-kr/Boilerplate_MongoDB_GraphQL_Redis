import {getHashtags} from '../services/hashtag.service.js';

const resolver = async (parent, args, context, info) => {
  return await getHashtags();
};

export default resolver;
