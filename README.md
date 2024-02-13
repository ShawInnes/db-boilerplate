# Postgres DB Boilerplate

This repo contains a docker-compose file for standing up a postgres instance with a sample data set.a

## Getting Started

```
docker compose up -d
```

## Initialising Prisma

To import this db into prisma, you need to enable multiSchema support and provide a list of schemas to import.

``` title="prisma/schema.prisma"
generator client {
  provider        = "prisma-client-js"
  previewFeatures = ["multiSchema"]
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
  schemas  = ["humanresources", "person", "production", "purchasing", "sales"]
}
```

```bash
npx prisma db pull
npx prisma generate
```