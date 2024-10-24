/** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.prod.website-files.com',
        },
        {
          protocol: 'https',
          hostname: 'www.fixhealth.com',
        },
        {
          protocol: 'https',
          hostname: 'zelh.com',
        },
      ],
    },
  }

export default nextConfig