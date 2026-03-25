/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === 'production' ? '/Summer-CV' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Summer-CV/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
