import Hashtag from '../models/schema/index.js';

const getHashtags = async () => {
  try {
    return await Hashtag.find();
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default getHashtags;
