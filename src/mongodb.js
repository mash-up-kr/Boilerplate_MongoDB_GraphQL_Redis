import mongoose from 'mongoose';

export default class Mongoose {
  constructor() {
    this.connect();
    this.mongoose.on('error', this.onError);
    this.mongoose.once('open', this.once);
    this.mongoose.on('disconnected', this.onDisconnected);
  }

  connect() {
    const MongoDBURL = `mongodb+srv://admin:1212@boilerprojectcluster.4j1xk.mongodb.net/boilerplate?retryWrites=true&w=majority`;
    mongoose.connect(MongoDBURL, {
      // dbName: 'boilerplate',
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
