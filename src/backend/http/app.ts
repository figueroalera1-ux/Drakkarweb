import Fastify from 'fastify';
import type { FastifyBaseLogger } from 'fastify';
import { createContainer } from '@backend/container';
import { registerErrorHandler } from '@backend/errors/error-handler';
import { logger } from '@backend/logger';
import { registerMiddleware } from '@backend/middleware';
import { generateRequestId } from '@backend/middleware/request-id';
import { registerV1Routes } from '@backend/api/v1/routes';
import { registerCrmRoutes } from '@backend/crm/routes';

export async function buildApp() {
  const app = Fastify({
    loggerInstance: logger as FastifyBaseLogger,
    genReqId: (request) => generateRequestId(request.headers['x-request-id']),
  });

  const container = createContainer();

  await registerMiddleware(app);
  await registerV1Routes(app, container.controllers);
  await app.register((crm) => registerCrmRoutes(crm, container.prisma), { prefix: '/api/v1' });
  registerErrorHandler(app);

  app.addHook('onClose', async () => {
    await container.prisma.$disconnect();
  });

  return app;
}
