import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import rateLimit from '@fastify/rate-limit';
import type { FastifyInstance } from 'fastify';
import { config } from '@backend/config';
import { registerAuditMiddleware } from './audit';

export async function registerMiddleware(app: FastifyInstance) {
  await app.register(helmet);
  await app.register(cors, {
    origin: config.API_CORS_ORIGIN.split(',').map((origin: string) => origin.trim()),
  });
  await app.register(rateLimit, {
    max: config.API_RATE_LIMIT_MAX,
    timeWindow: config.API_RATE_LIMIT_WINDOW,
  });

  registerAuditMiddleware(app);
}
