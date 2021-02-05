import {addHashtag} from '../services/hashtag.service.js';

const resolver = async (parent, args, context, info) => {
  const {title, postId} = args.input;

  return await addHashtag(title, postId);
};

export default resolver;
