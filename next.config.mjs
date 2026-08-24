/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Temporary: images are currently hotlinked from Figma's asset CDN while
    // you replace them with your own files in /public/images. See
    // public/images/README.md for how to swap them.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.figma.com",
        pathname: "/api/mcp/asset/**",
      },
    ],
  },
};

export default nextConfig;
