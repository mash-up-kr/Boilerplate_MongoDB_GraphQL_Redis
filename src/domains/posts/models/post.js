import mongoose from 'mongoose';

const {Schema} = mongoose;
const {Types: {ObjectId}} = Schema;

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  comments: [
    {
      type: ObjectId,
      ref: 'Comment',
    },
  ],
  hashtags: [
    {
      type: ObjectId,
      ref: 'HashTag',
    },
  ],
});

export const Post = mongoose.model('Post', postSchema);