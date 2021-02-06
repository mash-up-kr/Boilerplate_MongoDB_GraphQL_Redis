import {Hashtag} from '../models/index.js';
import * as utils from '../../../utils/deep_clone.js';

export const addHashtag = async (title, postId) => {
  const lowerCaseTitle = title.toLowerCase();

  const filterOrCreate = {
    title: lowerCaseTitle,
  };

  const pushItem = {
    posts: postId,
  };

  const update = {
    $push: pushItem,
    updatedAt: Date.now(),
  };

  const hashtag = await Hashtag.findOneAndUpdate(filterOrCreate, update, {
    new: true,
  });

  if (hashtag === null) {
    return await createHashtag(title);
  }

  return hashtag;
};

const createHashtag = async (title) => {
  const newHashtag = await Hashtag.create({
    title,
  });

  return newHashtag;
};

export const parsedAndCreateBulkHashtags = async (content) => {
  const parsedHashtags = parseHashtags(content);

  let hashtags = null;
  try {
    hashtags = await createBulkHashtag(parsedHashtags);
  } catch (error) {
    hashtags = await getHashtagsByTitleArray(parsedHashtags);
  }

  return hashtags;
};

export const parseHashtags = (content) => {
  if (typeof(content) !== 'string') {
    throw Error('content must be String!');
  }

  const regexExpression = /#[^\s#]+/g;
  const parsedHashtags = content.match(
      regexExpression,
  )
      .slice(0, getMaxNumberHashtagInOnePost())
      .map(
          (tag) => tag.slice(1).toLowerCase(),
      );
  return parsedHashtags;
};

export const createBulkHashtag = async (titleArray) => {
  if (Array.isArray(titleArray) === false) {
    throw Error('titleArray must be Array!');
  }

  titleArray = sliceHashtagsToMaxNumberWithDeepClone(titleArray);

  const hashtags = titleArray.map((title) => {
    return new Hashtag({
      title,
    });
  });

  const createBulkHashtags = await Hashtag.insertMany(
      hashtags,
      {
        // If false, will insert all the documents it can
        // and report errors later.
        ordered: false,
        // For performance, skips hydrating and validating the documents.
        lean: true,
      },
  );

  return createBulkHashtags;
};

export const sliceHashtagsToMaxNumberWithDeepClone = (titleArray) => {
  if (Array.isArray(titleArray) === false) {
    throw Error('titleArray must be Array!');
  }

  const deepClonedTitleArray = utils.deepClone(titleArray);
  const sliceDeepClonedTitleArray = deepClonedTitleArray
      .slice(0, getMaxNumberHashtagInOnePost());

  return sliceDeepClonedTitleArray;
};

export const getMaxNumberHashtagInOnePost = () => {
  return 10;
};

export const getHashtag = async (_id) => {
  const filter = {
    _id,
  };

  const hashtag = await Hashtag.findOne(filter)
      .populate('posts');

  return hashtag;
};

export const getHashtags = async () => {
  const hashtag = await Hashtag.find()
      .populate('posts');

  return hashtag;
};

export const getHashtagsByTitleArray = async (titleArray) => {
  if (Array.isArray(titleArray) === false) {
    throw Error('titleArray must be Array!');
  }

  titleArray = sliceHashtagsToMaxNumberWithDeepClone(titleArray);

  const filter = {
    title: {
      $in: titleArray,
    },
  };

  const hashtags = await Hashtag.find(filter);

  return hashtags;
};
