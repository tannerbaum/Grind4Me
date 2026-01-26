import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typedRoutes: true,
  reactCompiler: true,
  // Would be interested, but doesn't play great with Prisma yet https://github.com/prisma/prisma/issues/28588
  // cacheComponents: true,
};

export default nextConfig;
