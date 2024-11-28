import type { Metadata } from 'next'

import {
  DOMAIN_URL,
  GOOGLE_VERIFICATION,
  YANDEX_VERIFICATION,
  FACEBOOK_VERIFICATION,
} from '~/env'

type CreateMetadataArgs = {
  meta: Omit<Metadata, 'title'> & { title: string }

  path?: string
  layout?: boolean
}

const createMetadata = (args: CreateMetadataArgs): Metadata => {
  const { meta, path, layout = false } = args

  return {
    ...metadatas.default,
    ...meta,

    title: layout ? createTitleTemplate(meta.title) : meta.title,
    description: meta.description,

    twitter: {
      ...metadatas.default.twitter,
      ...meta.twitter,
    },
    openGraph: {
      ...metadatas.default.openGraph,
      ...meta.openGraph,
    },

    alternates: {
      canonical: path,
    },
  }
}

const createTitleTemplate = (title: string) => ({
  default: title,
  template: [TEMPLATE_SYMBOL, TEMPLATE_SEPARATOR, title, PARENT_TEMPLATE].join(
    ' ',
  ),
})

const TEMPLATE_SYMBOL = '%s'
const TEMPLATE_SEPARATOR = '-'
const PARENT_TEMPLATE = '• Ailergik'

const DEFAULT_IMAGE = {
  url: '/welcome.png',
  width: 3384,
  height: 2040,
}

const metadatas = {
  default: {
    title: {
      default: 'Умный веб-сервис для аллергиков • Ailergik',
      template: '%s • Ailergik',
    },
    description: 'Умный веб-сервис для аллергиков.',
    abstract: 'Ailergik',

    openGraph: {
      siteName: 'Ailergik',
      url: new URL(DOMAIN_URL),
      ttl: 88_640,
      locale: 'ru',
      images: [DEFAULT_IMAGE],
    },
    twitter: {
      card: 'summary',
      site: '@ailergik',
      images: [DEFAULT_IMAGE],
    },

    icons: {
      icon: '/icon.png',
      shortcut: '/favicon.ico',
      apple: '/apple-icon.png',
    },

    referrer: 'origin',
    metadataBase: new URL(DOMAIN_URL),
    robots: { index: true, follow: true },
    manifest: new URL('manifest.webmanifest', DOMAIN_URL),
    alternates: {
      canonical: '/',
    },

    verification: {
      google: GOOGLE_VERIFICATION,
      yandex: YANDEX_VERIFICATION,

      other: {
        ['facebook-domain-verification']: FACEBOOK_VERIFICATION,
      },
    },

    creator: 'Vadzim Zakharov, https://github.com/vzkharov',
    authors: [{ name: 'Vadzim Zakharov', url: 'https://github.com/vzkharov' }],
  },
} satisfies Record<string, Metadata>

export { metadatas, createMetadata }
