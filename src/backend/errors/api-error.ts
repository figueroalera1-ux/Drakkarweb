export class ApiError extends Error {
  constructor(
    message: string,
    public readonly statusCode: number = 500,
    public readonly code: string = 'INTERNAL_SERVER_ERROR',
    public readonly details?: unknown,
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export class NotFoundError extends ApiError {
  constructor(entityName: string, id: string) {
    super(`${entityName} was not found.`, 404, 'RESOURCE_NOT_FOUND', { id });
  }
}

export class ValidationError extends ApiError {
  constructor(details: unknown) {
    super('Request validation failed.', 400, 'VALIDATION_ERROR', details);
  }
}
