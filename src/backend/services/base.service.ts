import { NotFoundError } from '@backend/errors/api-error';
import type { DomainRepository } from '@backend/repositories/domain-repositories';

export class EntityReadService<TEntity> {
  constructor(private readonly repository: DomainRepository<TEntity>) {}

  async findById(id: string): Promise<TEntity> {
    const entity = await this.repository.findById(id);

    if (!entity) {
      throw new NotFoundError(this.repository.entityName, id);
    }

    return entity;
  }
}
