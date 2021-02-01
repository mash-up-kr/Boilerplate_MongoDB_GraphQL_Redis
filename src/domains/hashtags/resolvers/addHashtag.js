import {Hashtag} from '../models/index.js';

// TODO : TEST 해보기
const addHashtag = async (parent, args, context, info) => {
  const {tagId, postId} = args;
  return await Hashtag.findByIdAndUpdate(
      tagId,
      {$push: {posts: postId}});
};

export default addHashtag;
