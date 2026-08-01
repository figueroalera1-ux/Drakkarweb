# Production Foundation Architecture

## Scope

This phase creates only the production software foundation. It does not implement business logic, pages, CRM, CMS, authentication, fake data, or inferred requirements.

## Documentation findings

- The product is a commercial platform, not only a furniture website.
- The architecture must support website, catalog, CRM, CMS, API, PostgreSQL, automations, AI agents, and deployment growth.
- The API is expected to be REST JSON under `/api/v1/` in later phases.
- PostgreSQL is the official database engine and Prisma is an acceptable schema/client layer.
- Documentation contains intentionally incomplete/empty files that should be clarified before implementation: `docs/Blueprint/06_SITE_MAP.md`, `docs/Blueprint/20_COMPONENT_FORMS.md`, `docs/Architecture/08_DEPLOYMENT.md`, and all files under `docs/Development/`.

## Final foundation architecture

- Next.js App Router is the application shell.
- Frontend code is isolated under `src/frontend`.
- Backend API/service boundaries are isolated under `src/backend`.
- Shared configuration, types, and utilities are isolated under `src/shared`.
- Database definition is isolated under `prisma`.
- Infrastructure definition is isolated under `infra` and `docker-compose.yaml`.
- Operational scripts are isolated under `scripts`.
- Static assets are isolated under `public`.
- Documentation remains under `docs`.

## Recommendations before Phase 2

1. Complete the empty development standards before feature work.
2. Resolve the duplicate forms documentation file naming.
3. Define deployment target and environment promotion policy.
4. Approve the first API resource boundary before creating endpoints.
5. Approve the first data model slice before adding Prisma models or migrations.
