import type { FastifyInstance } from 'fastify';

export function registerAuditMiddleware(app: FastifyInstance) {
  app.addHook('onResponse', async (request, reply) => {
    request.log.info(
      {
        requestId: request.id,
        method: request.method,
        url: request.url,
        statusCode: reply.statusCode,
      },
      'request completed',
    );
  });
}
