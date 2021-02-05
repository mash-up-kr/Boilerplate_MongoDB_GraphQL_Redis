import {Hashtag} from '../models/index.js';

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

export const createBulkHashtag = async (titleArray) => {
  const hashtags = titleArray.map((title) => {
    return new Hashtag({
      title,
    });
  });

  const createBulkHashtags = await Hashtag.insertMany(
      hashtags,
      {
        ordered: false,
      },
  );

  return createBulkHashtags;
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

export const getHashtagsBytitleArray = async (titleArray) => {
  const filter = {
    title: {
      $in: titleArray,
    },
  };

  const hashtags = await Hashtag.find(filter);

  return hashtags;
};
