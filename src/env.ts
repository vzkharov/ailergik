/**
 * loaded from .env
 * */

export const NODE_ENV = process.env.NODE_ENV ?? 'development'
export const IS_PRODUCTION = process.env.NODE_ENV === 'production'

export const DOMAIN = process.env.DOMAIN ?? 'localhost:3000'
export const DOMAIN_URL = process.env.DOMAIN_URL ?? 'http://localhost:3000'

/**
 * @description meta
 */
export const GOOGLE_VERIFICATION = process.env.GOOGLE_VERIFICATION ?? ''
export const YANDEX_VERIFICATION = process.env.YANDEX_VERIFICATION ?? ''
export const FACEBOOK_VERIFICATION = process.env.FACEBOOK_VERIFICATION ?? ''

/**
 * @description directus credentials
 */

export const DIRECTUS_HOST = process.env.NEXT_PUBLIC_DIRECTUS_HOST ?? ''
export const DIRECTUS_EMAIL = process.env.DIRECTUS_EMAIL ?? ''
export const DIRECTUS_PASSWORD = process.env.DIRECTUS_PASSWORD ?? ''
export const DIRECTUS_TOKEN = process.env.DIRECTUS_TOKEN ?? ''

/**
 * @description auth vars
 */
export const JWT_SECRET = process.env.JWT_SECRET ?? ''
export const JWT_EXPIRED_MS = Number.parseInt(
  process.env.JWT_EXPIRED_MS ?? '31536000000',
)
export const UPSTASH_REDIS_URL = process.env.UPSTASH_REDIS_URL ?? ''
export const UPSTASH_REDIS_TOKEN = process.env.UPSTASH_REDIS_TOKEN ?? ''

/**
 * @description 1 pathname while developing
 */
export const IS_REDIRECT_PARTNERS = process.env.IS_REDIRECT_PARTNERS === 'true'

/**
 * @description development protection
 */
export const IS_STAGING = process.env.IS_STAGING === 'true'
export const STAGING_PASSWORD = process.env.STAGING_PASSWORD as string
