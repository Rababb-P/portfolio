/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const repo = 'portfolio'; // your GitHub repo name

const nextConfig = {
  output: 'export',
  distDir: 'dist',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  ...(isGithubPages && {
    basePath: `/${repo}`,
    assetPrefix: `/${repo}`,
  }),
};

export default nextConfig;
