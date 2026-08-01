type FindUniqueDelegate<TEntity> = {
  findUnique(args: { where: { id: string } }): Promise<TEntity | null>;
};

export class PrismaRepository<TEntity> {
  constructor(
    public readonly entityName: string,
    private readonly delegate: FindUniqueDelegate<TEntity>,
  ) {}

  findById(id: string): Promise<TEntity | null> {
    return this.delegate.findUnique({ where: { id } });
  }
}
