function base64UrlDecode(str: string): string {
  // Replace URL-safe characters with standard Base64 characters
  const base64 = str.replaceAll('-', '+').replaceAll('_', '/')

  // Pad with '=' to make it a valid Base64 string
  const padding =
    base64.length % 4 === 0 ? '' : '='.repeat(4 - (base64.length % 4))
  const decoded = atob(base64 + padding) // Use atob to decode Base64
  return decoded
}

function decodeJwt(token: string) {
  const parts = token.split('.')

  if (parts.length !== 3) {
    throw new Error('Invalid JWT format')
  }

  const payload = parts[1]
  const decodedPayload = base64UrlDecode(payload)

  try {
    return JSON.parse(decodedPayload)
  } catch (_error) {
    console.error(_error)
    throw new Error('Error parsing payload JSON')
  }
}

export { decodeJwt }
