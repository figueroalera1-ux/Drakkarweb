import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Seed structure intentionally contains no fake business data.
  // Add approved reference data only after Phase 3 planning.
}

main()
  .finally(async () => {
    await prisma.$disconnect();
  });
