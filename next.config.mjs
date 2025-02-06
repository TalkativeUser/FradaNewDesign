/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'www.fradaksa.net',
          port: '',
          pathname: '/back/**',
        },
        {
          protocol: 'https',
          hostname: 'www.envaglo.net',
          port: '',
          pathname: '/back/Laravel/public/**',
        },
      ],
    },
  };
  export default nextConfig;  