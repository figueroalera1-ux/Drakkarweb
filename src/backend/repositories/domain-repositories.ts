import type {
  ActivityLog,
  Category,
  Client,
  Color,
  CrmPipeline,
  Delivery,
  Faq,
  HeroSlide,
  Lead,
  Media,
  Note,
  Order,
  OrderItem,
  Permission,
  Product,
  ProductImage,
  ProductVariant,
  ProductionOrder,
  Role,
  Setting,
  Task,
  User,
} from '@prisma/client';

export interface DomainRepositories {
  users: DomainRepository<User>;
  roles: DomainRepository<Role>;
  permissions: DomainRepository<Permission>;
  products: DomainRepository<Product>;
  categories: DomainRepository<Category>;
  productVariants: DomainRepository<ProductVariant>;
  colors: DomainRepository<Color>;
  productImages: DomainRepository<ProductImage>;
  leads: DomainRepository<Lead>;
  clients: DomainRepository<Client>;
  orders: DomainRepository<Order>;
  orderItems: DomainRepository<OrderItem>;
  productionOrders: DomainRepository<ProductionOrder>;
  deliveries: DomainRepository<Delivery>;
  crmPipeline: DomainRepository<CrmPipeline>;
  notes: DomainRepository<Note>;
  tasks: DomainRepository<Task>;
  heroSlides: DomainRepository<HeroSlide>;
  faq: DomainRepository<Faq>;
  settings: DomainRepository<Setting>;
  media: DomainRepository<Media>;
  activityLogs: DomainRepository<ActivityLog>;
}

export interface DomainRepository<TEntity> {
  readonly entityName: string;
  findById(id: string): Promise<TEntity | null>;
}
