/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repo = process.env.GITHUB_PAGES_REPOSITORY || '';

const nextConfig = {
  reactStrictMode: false,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages && repo ? `/${repo}` : '',
  assetPrefix: isGithubPages && repo ? `/${repo}/` : '',
};

module.exports = nextConfig;
