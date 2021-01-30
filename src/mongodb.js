import mongoose from 'mongoose';

export default class Mongoose {
  constructor() {
    this.connect(
        process.env.MONGODB_URI,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        },
    );
    this.mongoose = mongoose.connection;
    this.mongoose.on('error', this.onError);
    this.mongoose.once('open', this.once);
    this.mongoose.on('disconnected', this.onDisconnected);
  }

  connect(mongodbUri, options) {
    mongoose.connect(mongodbUri, options);
  }

  once() {
    console.log('🚀 MongoDB connected successfully!');
  }

  onError(error) {
    console.error(error);
  }

  onDisconnected() {
    console.log('⚡️ MongoDB disconnected.');
  }
};
