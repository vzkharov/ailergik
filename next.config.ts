import type { NextConfig } from 'next'

import { IS_REDIRECT_PARTNERS } from '~/env'

const nextConfig: NextConfig = {
  experimental: {
    after: true,
  },
  async redirects() {
    if (!IS_REDIRECT_PARTNERS) {
      return []
    }

    return [
      {
        source: '/:path((?!partners).*)',
        destination: '/partners',
        permanent: true,
      },
    ]
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
