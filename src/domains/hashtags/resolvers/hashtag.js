import {getHashtag} from '../services/hashtag.service.js';

const resolver = async (parent, args, context, info) => {
  const {_id} = args;
  return await getHashtag(_id);
};

export default resolver;
