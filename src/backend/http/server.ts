import { config } from '@backend/config';
import { logger } from '@backend/logger';
import { buildApp } from './app';

async function start() {
  const app = await buildApp();
  await app.listen({ host: config.API_HOST, port: config.API_PORT });
}

start().catch((error) => {
  logger.fatal({ error }, 'api startup failed');
  process.exit(1);
});
