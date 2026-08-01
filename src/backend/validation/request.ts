import type { FastifyReply, FastifyRequest } from 'fastify';
import type { ZodSchema } from 'zod';

export type RequestSchemas = {
  body?: ZodSchema;
  params?: ZodSchema;
  query?: ZodSchema;
};

export function validateRequest(schemas: RequestSchemas) {
  return async (request: FastifyRequest, _reply: FastifyReply) => {
    if (schemas.body) {
      request.body = schemas.body.parse(request.body);
    }
    if (schemas.params) {
      request.params = schemas.params.parse(request.params);
    }
    if (schemas.query) {
      request.query = schemas.query.parse(request.query);
    }
  };
}
