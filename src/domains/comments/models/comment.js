import mongoose from 'mongoose';

const {Schema} = mongoose;
const {Types: {ObjectId}} = Schema;

const commentSchema = new Schema({
  comment: {
    type: String,
    requried: true,
  },
  author: {
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
    requried: false,
    default: null,
  },
  isChild: {
    type: Boolean,
    required: false,
    default: false,
  },
  parent: {
    type: ObjectId,
    ref: 'Comment',
    required: false,
  },
  postId: {
    type: ObjectId,
    ref: 'Post',
    required: true,
  },
  replies: [
    {
      type: ObjectId,
      ref: 'Comment',
    },
  ],
});

export const Comment = mongoose.model('Comment', commentSchema);
