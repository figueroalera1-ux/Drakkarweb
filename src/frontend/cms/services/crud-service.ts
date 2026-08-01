import type { HttpClient } from './http-client';

export class CrudService<TEntity> {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly resourcePath: string,
  ) {}

  findById(id: string): Promise<{ data: TEntity }> {
    return this.httpClient.get<{ data: TEntity }>(`${this.resourcePath}/${id}`);
  }
}
