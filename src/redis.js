import Redis from 'ioredis';

export default class RedisClient {
  constructor() {
    // 쓰기 전용 (읽기도 됨)
    self.redisDefault = new Redis(
        REDIS_DEFAULT_PORT,
        process.env.REDIS_DEFAULT,
    );

    // 읽기 전용
    self.redisReadonly = new Redis(
        REDIS_READONLY_PORT,
        process.env.REDIS_READONLY,
    );

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
};
