import Redis from 'ioredis';

class RedisClient {
  constructor() {
    self.redisDefault = new Redis(
        REDIS_DEFAULT_PORT || 6379,
        process.env.REDIS_DEFAULT || '127.0.0.1',
    );
    self.redisReadonly = new Redis(
        REDIS_READONLY_PORT || 6379,
        process.env.REDIS_READONLY || '127.0.0.1')
    ;

    self.getAsyncDefault = promisify(redisDefault.get).bind(redisDefault);
    self.getAsyncReadonly = promisify(redisReadonly.get).bind(redisReadonly);
  }

  async getAsync(key) {
    const reply = await self.getAsyncReadonly(key);
    return reply;
  }

  set(key, value) {
    self.redisDefault.set(key, value);
  }

  set(key, value, timeoutSecs) {
    self.set(key, value);
    self.redisDefault.expire(
        key,
        timeoutSecs,
    );
  }
}

export default new RedisClient;
