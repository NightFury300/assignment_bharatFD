import { client } from '../utils/RedisClient.js';

const getCache = async (key) => {
  try {
    const data = await client.get(key);
    return data ? JSON.parse(data) : null;
  } catch (err) {
    console.error(`Redis GET error for key ${key}:`, err);
    return null;
  }
};

const setCache = async (key, value, ttl = 3600) => {
  try {
    await client.setEx(key, ttl, JSON.stringify(value));
  } catch (err) {
    console.error(`Redis SET error for key ${key}:`, err);
  }
};

export { setCache, getCache };
