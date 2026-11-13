import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home', // Change this to your actual home page route
        permanent: true,     // Sets a 308 permanent redirect status code
      },
    ]
  },
};

export default nextConfig;
