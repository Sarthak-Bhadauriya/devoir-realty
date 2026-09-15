/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowLocalIP: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'videos.pexels.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'devoirrealty.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.excellainfra.in',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

