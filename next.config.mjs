/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    instrumentationHook: true,
    basePath: '/app/stock',
  },
};

export default nextConfig;
