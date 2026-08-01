import pino from 'pino';

export const logger = pino({
  name: 'tiendas-drakkar-api',
  level: process.env.LOG_LEVEL ?? 'info',
});
