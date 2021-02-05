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
  ipv4: {
    type: String,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  deletedAt: {
    type: Date,
    required: false,
    default: null,
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
