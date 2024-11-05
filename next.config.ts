import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  logging: {
    fetches: { fullUrl: true, hmrRefreshes: true },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cms.allergik.by',
        pathname: '/assets/*',
      },
    ],
  },
}

export default nextConfig
