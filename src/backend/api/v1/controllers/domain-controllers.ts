import type { DomainServices } from '@backend/services/domain-services';
import { EntityReadController } from './base.controller';

export function createDomainControllers(services: DomainServices) {
  return {
    users: new EntityReadController(services.users),
    roles: new EntityReadController(services.roles),
    permissions: new EntityReadController(services.permissions),
    products: new EntityReadController(services.products),
    categories: new EntityReadController(services.categories),
    productVariants: new EntityReadController(services.productVariants),
    colors: new EntityReadController(services.colors),
    productImages: new EntityReadController(services.productImages),
    leads: new EntityReadController(services.leads),
    clients: new EntityReadController(services.clients),
    orders: new EntityReadController(services.orders),
    orderItems: new EntityReadController(services.orderItems),
    productionOrders: new EntityReadController(services.productionOrders),
    deliveries: new EntityReadController(services.deliveries),
    crmPipeline: new EntityReadController(services.crmPipeline),
    notes: new EntityReadController(services.notes),
    tasks: new EntityReadController(services.tasks),
    heroSlides: new EntityReadController(services.heroSlides),
    faq: new EntityReadController(services.faq),
    settings: new EntityReadController(services.settings),
    media: new EntityReadController(services.media),
    activityLogs: new EntityReadController(services.activityLogs),
  };
}

export type DomainControllers = ReturnType<typeof createDomainControllers>;
