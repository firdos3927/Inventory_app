import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    // Add your seed command here
    seed: "tsx prisma/seed.ts", // or "npx ts-node prisma/seed.ts"
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
});
