import type { PrismaClient } from '@prisma/client';
import type { DomainRepositories } from '../domain-repositories';
import { PrismaRepository } from './base.repository';

export function createDomainRepositories(prisma: PrismaClient): DomainRepositories {
  return {
    users: new PrismaRepository('User', prisma.user),
    roles: new PrismaRepository('Role', prisma.role),
    permissions: new PrismaRepository('Permission', prisma.permission),
    products: new PrismaRepository('Product', prisma.product),
    categories: new PrismaRepository('Category', prisma.category),
    productVariants: new PrismaRepository('ProductVariant', prisma.productVariant),
    colors: new PrismaRepository('Color', prisma.color),
    productImages: new PrismaRepository('ProductImage', prisma.productImage),
    leads: new PrismaRepository('Lead', prisma.lead),
    clients: new PrismaRepository('Client', prisma.client),
    orders: new PrismaRepository('Order', prisma.order),
    orderItems: new PrismaRepository('OrderItem', prisma.orderItem),
    productionOrders: new PrismaRepository('ProductionOrder', prisma.productionOrder),
    deliveries: new PrismaRepository('Delivery', prisma.delivery),
    crmPipeline: new PrismaRepository('CrmPipeline', prisma.crmPipeline),
    notes: new PrismaRepository('Note', prisma.note),
    tasks: new PrismaRepository('Task', prisma.task),
    heroSlides: new PrismaRepository('HeroSlide', prisma.heroSlide),
    faq: new PrismaRepository('Faq', prisma.faq),
    settings: new PrismaRepository('Setting', prisma.setting),
    media: new PrismaRepository('Media', prisma.media),
    activityLogs: new PrismaRepository('ActivityLog', prisma.activityLog),
  };
}
