import { createClient } from 'redis';

const client = createClient({
  username: 'default',
  password: 'GWEC1hn06dUlV5evNAfOKo2Rmlr7friJ',
  socket: {
    host: 'redis-16945.crce179.ap-south-1-1.ec2.redns.redis-cloud.com',
    port: 16945,
  },
});

client.on('error', (err) => console.log('Redis Client Error', err));

await client
  .connect()
  .then(() => {
    console.log('Redis Connection Established');
  })
  .catch((error) => {
    console.log('Redis Connection Failed', error);
  });

export { client };
