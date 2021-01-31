import Hashtag from '../models/schema/index.js';

// TODO : TEST 해보기
const addPostIdOnHashtag = async (_, {
  tagId,
  postId,
}) => {
  try {
    return await Hashtag.findByIdAndUpdate(
        {_id: tagId},
        {$push: {posts: postId}});
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export default addPostIdOnHashtag;
