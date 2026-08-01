import { createDomainControllers } from '@backend/api/v1/controllers/domain-controllers';
import { prisma } from '@backend/prisma/client';
import { createDomainRepositories } from '@backend/repositories/implementations/domain-repositories';
import { createDomainServices } from '@backend/services/domain-services';

export function createContainer() {
  const repositories = createDomainRepositories(prisma);
  const services = createDomainServices(repositories);
  const controllers = createDomainControllers(services);

  return {
    prisma,
    repositories,
    services,
    controllers,
  };
}

export type AppContainer = ReturnType<typeof createContainer>;
