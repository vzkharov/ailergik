import { headers } from 'next/headers'
import { NextResponse } from 'next/server'

const HEADER_CSP: string = 'Content-Security-Policy'
const HEADER_NONCE: string = 'x-nonce'
const ALLOWED_DOMAINS: string[] = []

const csp = (headers: Headers): NextResponse => {
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64')

  const allowedDomains: string = ALLOWED_DOMAINS.join(' ')

  const cspHeader = `
        script-src 'self' 'unsafe-inline' 'unsafe-eval' ${allowedDomains};
        style-src 'self' 'unsafe-inline' ${allowedDomains};
        img-src 'self' blob: data: ${allowedDomains};
        font-src 'self';
        object-src 'none';
        base-uri 'self';
        form-action 'self';
        frame-ancestors 'none';
        block-all-mixed-content;
        upgrade-insecure-requests;
    `

  // Replace newline characters and spaces
  const contentSecurityPolicyHeaderValue = cspHeader
    .replaceAll(/\s{2,}/g, ' ')
    .trim()

  const requestHeaders = new Headers(headers)

  requestHeaders.set(HEADER_NONCE, nonce)
  requestHeaders.set(HEADER_CSP, contentSecurityPolicyHeaderValue)

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })

  response.headers.set(HEADER_CSP, contentSecurityPolicyHeaderValue)

  return response
}

const nonce = () =>
  headers().then(headers => headers.get('HEADER_NONCE')) ?? undefined

export { nonce, csp, HEADER_CSP }
