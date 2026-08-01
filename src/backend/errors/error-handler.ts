import type { FastifyError, FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { ZodError } from 'zod';
import { ApiError, ValidationError } from './api-error';

export function registerErrorHandler(app: FastifyInstance) {
  app.setErrorHandler((error: FastifyError | ApiError, request: FastifyRequest, reply: FastifyReply) => {
    const normalizedError = error instanceof ZodError ? new ValidationError(error.flatten()) : error;
    const statusCode = normalizedError instanceof ApiError ? normalizedError.statusCode : 500;
    const code = normalizedError instanceof ApiError ? normalizedError.code : 'INTERNAL_SERVER_ERROR';
    const details = normalizedError instanceof ApiError ? normalizedError.details : undefined;

    request.log.error({ error: normalizedError, requestId: request.id }, normalizedError.message);

    return reply.status(statusCode).send({
      error: {
        code,
        message: statusCode === 500 ? 'Internal server error.' : normalizedError.message,
        details,
        requestId: request.id,
      },
    });
  });
}
