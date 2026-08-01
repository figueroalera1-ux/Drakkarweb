export type UUID = string;

export type AuditableEntity = {
  id: UUID;
  createdAt: Date;
  updatedAt: Date;
};

export type SoftDeletableEntity = AuditableEntity & {
  deletedAt: Date | null;
};

export const productStatuses = [
  'DRAFT',
  'PUBLISHED',
  'HIDDEN',
  'DISCONTINUED',
  'TEMPORARILY_OUT_OF_STOCK',
] as const;

export const leadStatuses = [
  'NEW',
  'CONTACTED',
  'INTERESTED',
  'QUOTE_SENT',
  'NEGOTIATION',
  'SALE_CONFIRMED',
  'PRODUCTION',
  'DELIVERY',
  'POST_SALE',
  'RECURRING_CLIENT',
  'LOST',
] as const;

export const orderStatuses = [
  'DRAFT',
  'CONFIRMED',
  'IN_PRODUCTION',
  'READY_FOR_DELIVERY',
  'DELIVERED',
  'CANCELLED',
] as const;

export const productionStatuses = [
  'PENDING',
  'SCHEDULED',
  'IN_MANUFACTURING',
  'QUALITY_CONTROL',
  'FINISHED',
  'READY_FOR_DELIVERY',
  'DELIVERED',
  'CANCELLED',
] as const;

export const deliveryStatuses = [
  'PENDING',
  'SCHEDULED',
  'CONFIRMED',
  'IN_ROUTE',
  'DELIVERED',
  'RESCHEDULED',
  'CANCELLED',
] as const;

export type ProductStatus = (typeof productStatuses)[number];
export type LeadStatus = (typeof leadStatuses)[number];
export type OrderStatus = (typeof orderStatuses)[number];
export type ProductionStatus = (typeof productionStatuses)[number];
export type DeliveryStatus = (typeof deliveryStatuses)[number];
