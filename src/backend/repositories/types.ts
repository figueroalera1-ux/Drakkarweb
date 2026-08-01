import type { Prisma } from '@prisma/client';

export type RepositoryTransaction = Prisma.TransactionClient;

export interface RepositoryContext {
  transaction?: RepositoryTransaction;
}

export interface PaginatedQuery {
  page?: number;
  pageSize?: number;
}

export interface SoftDeleteFilter {
  includeDeleted?: boolean;
}
