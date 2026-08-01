import { z } from 'zod';
import {
  deliveryStatuses,
  leadStatuses,
  orderStatuses,
  productStatuses,
  productionStatuses,
} from '@shared/types';

export const uuidSchema = z.string().uuid();
export const nullableUuidSchema = uuidSchema.nullable().optional();
export const slugSchema = z.string().min(1).max(160).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
export const skuSchema = z.string().min(1).max(80);
export const optionalTextSchema = z.string().trim().min(1).optional();
export const emailSchema = z.string().email().optional();
export const phoneSchema = z.string().trim().min(1).max(40).optional();
export const moneySchema = z.coerce.number().nonnegative().optional();

export const productStatusSchema = z.enum(productStatuses);
export const leadStatusSchema = z.enum(leadStatuses);
export const orderStatusSchema = z.enum(orderStatuses);
export const productionStatusSchema = z.enum(productionStatuses);
export const deliveryStatusSchema = z.enum(deliveryStatuses);

export const userSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1).max(160),
  phone: phoneSchema,
  roleId: uuidSchema,
});

export const roleSchema = z.object({
  name: z.string().min(1).max(120),
  description: optionalTextSchema,
});

export const permissionSchema = z.object({
  key: z.string().min(1).max(160),
  description: optionalTextSchema,
});

export const categorySchema = z.object({
  name: z.string().min(1).max(160),
  slug: slugSchema,
  description: optionalTextSchema,
  parentId: nullableUuidSchema,
  displayOrder: z.number().int().default(0),
  isActive: z.boolean().default(true),
});

export const colorSchema = z.object({
  name: z.string().min(1).max(120),
  slug: slugSchema,
  hexCode: z.string().regex(/^#[0-9A-Fa-f]{6}$/).optional(),
  isActive: z.boolean().default(true),
});

export const productSchema = z.object({
  sku: skuSchema,
  name: z.string().min(1).max(180),
  slug: slugSchema,
  shortDescription: optionalTextSchema,
  fullDescription: optionalTextSchema,
  brand: optionalTextSchema,
  status: productStatusSchema.default('DRAFT'),
  isFeatured: z.boolean().default(false),
  displayOrder: z.number().int().default(0),
});

export const productVariantSchema = z.object({
  productId: uuidSchema,
  colorId: nullableUuidSchema,
  sku: skuSchema,
  name: z.string().min(1).max(180),
  slug: slugSchema,
  configuration: optionalTextSchema,
  dimensions: optionalTextSchema,
  price: moneySchema,
  estimatedProductionDays: z.number().int().nonnegative().optional(),
  isActive: z.boolean().default(true),
});

export const productImageSchema = z.object({
  productId: uuidSchema,
  variantId: nullableUuidSchema,
  mediaId: nullableUuidSchema,
  url: z.string().url(),
  altText: optionalTextSchema,
  imageType: optionalTextSchema,
  isPrimary: z.boolean().default(false),
  displayOrder: z.number().int().default(0),
});

export const leadSchema = z.object({
  assignedUserId: nullableUuidSchema,
  clientId: nullableUuidSchema,
  firstName: optionalTextSchema,
  lastName: optionalTextSchema,
  companyName: optionalTextSchema,
  email: emailSchema,
  phone: phoneSchema,
  source: optionalTextSchema,
  status: leadStatusSchema.default('NEW'),
  message: optionalTextSchema,
});

export const clientSchema = z.object({
  firstName: optionalTextSchema,
  lastName: optionalTextSchema,
  companyName: optionalTextSchema,
  email: emailSchema,
  phone: phoneSchema,
  taxId: optionalTextSchema,
  address: optionalTextSchema,
  city: optionalTextSchema,
  state: optionalTextSchema,
  country: z.string().min(1).default('México'),
  postalCode: optionalTextSchema,
});

export const orderSchema = z.object({
  orderNumber: z.string().min(1).max(80),
  clientId: uuidSchema,
  leadId: nullableUuidSchema,
  status: orderStatusSchema.default('DRAFT'),
  subtotal: moneySchema,
  total: moneySchema,
  notes: optionalTextSchema,
});

export const orderItemSchema = z.object({
  orderId: uuidSchema,
  productId: uuidSchema,
  variantId: nullableUuidSchema,
  quantity: z.number().int().positive().default(1),
  unitPrice: moneySchema,
  totalPrice: moneySchema,
  notes: optionalTextSchema,
});

export const productionOrderSchema = z.object({
  orderId: uuidSchema,
  orderItemId: nullableUuidSchema,
  productId: nullableUuidSchema,
  variantId: nullableUuidSchema,
  status: productionStatusSchema.default('PENDING'),
  observations: optionalTextSchema,
});

export const deliverySchema = z.object({
  orderId: uuidSchema,
  productionOrderId: nullableUuidSchema,
  status: deliveryStatusSchema.default('PENDING'),
  recipientName: optionalTextSchema,
  recipientPhone: phoneSchema,
  address: optionalTextSchema,
  evidenceUrl: z.string().url().optional(),
  incidentDescription: optionalTextSchema,
  observations: optionalTextSchema,
});

export const noteSchema = z.object({
  authorId: nullableUuidSchema,
  leadId: nullableUuidSchema,
  clientId: nullableUuidSchema,
  orderId: nullableUuidSchema,
  content: z.string().min(1),
});

export const taskSchema = z.object({
  assignedUserId: nullableUuidSchema,
  leadId: nullableUuidSchema,
  clientId: nullableUuidSchema,
  orderId: nullableUuidSchema,
  title: z.string().min(1).max(180),
  description: optionalTextSchema,
});

export const heroSlideSchema = z.object({
  title: z.string().min(1).max(180),
  subtitle: optionalTextSchema,
  description: optionalTextSchema,
  desktopImageUrl: z.string().url().optional(),
  tabletImageUrl: z.string().url().optional(),
  mobileImageUrl: z.string().url().optional(),
  altText: optionalTextSchema,
  displayOrder: z.number().int().default(0),
  isActive: z.boolean().default(false),
});

export const faqSchema = z.object({
  question: z.string().min(1),
  answer: z.string().min(1),
  category: optionalTextSchema,
  displayOrder: z.number().int().default(0),
  isActive: z.boolean().default(true),
});

export const settingSchema = z.object({
  key: z.string().min(1).max(160),
  value: z.unknown(),
  description: optionalTextSchema,
});

export const mediaSchema = z.object({
  url: z.string().url(),
  filename: optionalTextSchema,
  mimeType: optionalTextSchema,
  sizeBytes: z.number().int().nonnegative().optional(),
  altText: optionalTextSchema,
});
