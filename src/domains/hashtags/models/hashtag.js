import mongoose from 'mongoose';

const {Schema} = mongoose;
const {Types: {ObjectId}} = Schema;

const hashtagSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  posts: [
    {
      type: ObjectId,
      ref: 'Post',
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('HashTag', hashtagSchema);
