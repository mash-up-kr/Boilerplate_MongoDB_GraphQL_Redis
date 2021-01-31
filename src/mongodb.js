import mongoose from 'mongoose';

export default class Mongoose {
  constructor() {
    this.connect();
    this.mongoose.on('error', this.onError);
    this.mongoose.once('open', this.once);
    this.mongoose.on('disconnected', this.onDisconnected);
  }

  connect() {
    const MongoDBURL = `mongodb://${process.env.MONGODB_ID}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_IP}:${process.env.MONGODB_PORT}/${process.env.MONGODB_AUTHENTICATION_DB}`;
    mongoose.connect(MongoDBURL, {
      dbName: 'boilerplate',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    this.mongoose = mongoose.connection;
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
