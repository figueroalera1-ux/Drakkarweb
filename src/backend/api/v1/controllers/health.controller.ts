import type { FastifyReply, FastifyRequest } from 'fastify';

export class HealthController {
  getHealth = async (_request: FastifyRequest, reply: FastifyReply) => {
    return reply.send({
      data: {
        status: 'ok',
        service: 'tiendas-drakkar-api',
        version: 'v1',
      },
    });
  };
}
