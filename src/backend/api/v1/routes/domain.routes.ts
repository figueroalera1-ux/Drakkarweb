import type { FastifyInstance } from 'fastify';
import type { DomainControllers } from '../controllers/domain-controllers';
import { idParamsSchema } from '@backend/validation/common';
import { validateRequest } from '@backend/validation/request';

const routeMap = [
  ['users', 'users'],
  ['roles', 'roles'],
  ['permissions', 'permissions'],
  ['products', 'products'],
  ['categories', 'categories'],
  ['product-variants', 'productVariants'],
  ['colors', 'colors'],
  ['product-images', 'productImages'],
  ['leads', 'leads'],
  ['clients', 'clients'],
  ['orders', 'orders'],
  ['order-items', 'orderItems'],
  ['production-orders', 'productionOrders'],
  ['deliveries', 'deliveries'],
  ['crm-pipeline', 'crmPipeline'],
  ['notes', 'notes'],
  ['tasks', 'tasks'],
  ['hero-slides', 'heroSlides'],
  ['faq', 'faq'],
  ['settings', 'settings'],
  ['media', 'media'],
  ['activity-logs', 'activityLogs'],
] as const;

export async function registerDomainRoutes(app: FastifyInstance, controllers: DomainControllers) {
  for (const [path, controllerKey] of routeMap) {
    app.get(`/${path}/:id`, { preHandler: validateRequest({ params: idParamsSchema }) }, controllers[controllerKey].getById);
  }
}
