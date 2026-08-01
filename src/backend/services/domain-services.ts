import type { DomainRepositories } from '@backend/repositories/domain-repositories';
import { EntityReadService } from './base.service';

export function createDomainServices(repositories: DomainRepositories) {
  return {
    users: new EntityReadService(repositories.users),
    roles: new EntityReadService(repositories.roles),
    permissions: new EntityReadService(repositories.permissions),
    products: new EntityReadService(repositories.products),
    categories: new EntityReadService(repositories.categories),
    productVariants: new EntityReadService(repositories.productVariants),
    colors: new EntityReadService(repositories.colors),
    productImages: new EntityReadService(repositories.productImages),
    leads: new EntityReadService(repositories.leads),
    clients: new EntityReadService(repositories.clients),
    orders: new EntityReadService(repositories.orders),
    orderItems: new EntityReadService(repositories.orderItems),
    productionOrders: new EntityReadService(repositories.productionOrders),
    deliveries: new EntityReadService(repositories.deliveries),
    crmPipeline: new EntityReadService(repositories.crmPipeline),
    notes: new EntityReadService(repositories.notes),
    tasks: new EntityReadService(repositories.tasks),
    heroSlides: new EntityReadService(repositories.heroSlides),
    faq: new EntityReadService(repositories.faq),
    settings: new EntityReadService(repositories.settings),
    media: new EntityReadService(repositories.media),
    activityLogs: new EntityReadService(repositories.activityLogs),
  };
}

export type DomainServices = ReturnType<typeof createDomainServices>;
