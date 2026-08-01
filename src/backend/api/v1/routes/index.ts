import type { FastifyInstance } from 'fastify';
import type { DomainControllers } from '../controllers/domain-controllers';
import { registerDomainRoutes } from './domain.routes';
import { registerHealthRoutes } from './health.routes';

export async function registerV1Routes(app: FastifyInstance, controllers: DomainControllers) {
  await app.register(async (v1: FastifyInstance) => {
    await registerHealthRoutes(v1);
    await registerDomainRoutes(v1, controllers);
  }, { prefix: '/api/v1' });
}
