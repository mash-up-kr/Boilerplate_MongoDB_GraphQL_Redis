import {Hashtag} from '../models/index.js';

const getHashtag = async (parent, args, context, info) => {
  const {id} = args;
  const hashtag = await Hashtag.findById(id);
  if (hashtag) return hashtag;
};

export default getHashtag;
