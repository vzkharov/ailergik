import './globals.css'

import type { Metadata, Viewport } from 'next'

import type { Layout } from '~/lib/types'
import { metadatas } from '~/lib/metadata'
import { fontsClassName } from '~/lib/fonts'

import { Footer } from '~/components/footer'
import { Header } from '~/components/header'

import { Providers } from './providers'
import { StagingProtected } from '~/lib/staging-auth'

const Root: Layout = ({ children }) => (
  <html
    dir="ltr"
    lang="ru"
    suppressHydrationWarning
    suppressContentEditableWarning
  >
    <body className={fontsClassName}>
      {/* @ts-expect-error Async Server Component */}
      <StagingProtected>
        <Providers>
          <Header />
          <main className="container flex flex-col gap-y-2xl pt-xs">
            {children}
          </main>
          <div className="h-16" />
          <Footer />
        </Providers>
      </StagingProtected>
    </body>
  </html>
)

export const metadata: Metadata = metadatas.default

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
