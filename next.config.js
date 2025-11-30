/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fix the workspace root detection issue
  outputFileTracingRoot: __dirname,
};

module.exports = nextConfig;

