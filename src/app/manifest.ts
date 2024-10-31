import type { MetadataRoute } from 'next'

const manifest = (): MetadataRoute.Manifest => ({
  name: '',
  short_name: '',
  description: '',
  start_url: '/',
  display: 'standalone',
  background_color: '#fff',
  theme_color: '#fff',
  icons: [
    {
      sizes: '64x64',
      src: '/favicon.ico',
      type: 'image/x-icon',
    },
  ],
})

export default manifest
