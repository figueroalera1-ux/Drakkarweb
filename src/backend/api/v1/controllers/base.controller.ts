import type { FastifyReply, FastifyRequest } from 'fastify';
import type { IdParams } from '@backend/validation/common';
import type { EntityReadService } from '@backend/services/base.service';

export class EntityReadController<TEntity> {
  constructor(private readonly service: EntityReadService<TEntity>) {}

  getById = async (request: FastifyRequest<{ Params: IdParams }>, reply: FastifyReply) => {
    const entity = await this.service.findById(request.params.id);
    return reply.send({ data: entity });
  };
}
