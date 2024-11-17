import './globals.css'

import type { Metadata, Viewport } from 'next'

import type { Layout } from '~/lib/types'
import { rootMetadata } from '~/lib/metadata'
import { fontsClassName } from '~/lib/fonts'

import { Footer } from '~/components/footer'

import { Providers } from './providers'

const Root: Layout = ({ children }) => (
  <html
    dir="ltr"
    lang="ru"
    suppressHydrationWarning
    suppressContentEditableWarning
  >
    <body className={fontsClassName}>
      <Providers>
        <main className="gap-y-2xl pt-md container flex flex-col">
          {children}
        </main>
      </Providers>
      <div className="h-16" />
      <Footer />
    </body>
  </html>
)

export const metadata: Metadata = rootMetadata

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  width: 'device-width',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: 'black' },
    { media: '(prefers-color-scheme: light)', color: 'black' },
  ],
}

export default Root
