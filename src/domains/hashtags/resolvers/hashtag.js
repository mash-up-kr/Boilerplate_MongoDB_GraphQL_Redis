import Hashtag from '../models/schema/index.js';

const getHashtag = async (_, {
  id,
}) => {
  try {
    const hashtag = await Hashtag.findById(id);
    if (hashtag) return hashtag;
    throw new Error('Hashtag no found');
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default getHashtag;
