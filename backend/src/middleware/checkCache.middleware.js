import { getCache } from '../services/cache.service.js';
import { APIResponse } from '../utils/APIResponse.js';

const checkCache = async (req, res, next) => {
  const { lang = 'en' } = req.query;
  const cacheKey = `faqs_${lang}`;

  const cachedData = await getCache(cacheKey);
  if (cachedData) {
    return res.json(
      new APIResponse(200, cachedData, 'Cache fetched successfully.'),
    );
  }

  next();
};

export { checkCache };
