import type { FastifyInstance } from 'fastify';
import { HealthController } from '../controllers/health.controller';

export async function registerHealthRoutes(app: FastifyInstance) {
  const controller = new HealthController();
  app.get('/health', controller.getHealth);
}
