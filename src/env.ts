/**
 * loaded from .env
 * */

export const NODE_ENV = process.env.NODE_ENV ?? 'development'

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
 * @description 1 pathname while developing
 */
export const IS_REDIRECT_PARTNERS = process.env.IS_REDIRECT_PARTNERS === 'true'
