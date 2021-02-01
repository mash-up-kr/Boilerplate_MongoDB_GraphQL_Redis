import {Hashtag} from '../models/index.js';

const getHashtags = async (parent, args, context, info) => {
  return await Hashtag.find();
};

export default getHashtags;
