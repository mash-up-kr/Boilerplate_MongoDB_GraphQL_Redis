import Hashtag from '../models/schema/index.js';

const createHashtag = async (_, {
  tag,
  posts,
}) => {
  try {
    return await new Hashtag({tag, posts}).save();
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export default createHashtag;
