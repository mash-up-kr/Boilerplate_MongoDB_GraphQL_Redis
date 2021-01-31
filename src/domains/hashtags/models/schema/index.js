import mongoose from 'mongoose';

const {Schema} = mongoose;
const {Types: {ObjectId}} = Schema;

const hashtagSchema = new Schema({
  tag: {
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
});

export default mongoose.model('HashTag', hashtagSchema);
