import {Hashtag} from '../models/index.js';

const createHashtag = async (parent, args, context, info) => {
  const {tag, posts} = args;
  return await new Hashtag({tag, posts}).save();
};

export default createHashtag;
