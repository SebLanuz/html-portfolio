/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/html-portfolio",
  assetPrefix: "/html-portfolio/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
