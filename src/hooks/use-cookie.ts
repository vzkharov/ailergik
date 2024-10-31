'use client'

import { useCallback } from 'react'
import { useCookies, type ReactCookieProps } from 'react-cookie'

type SetCookieOptions = ReactCookieProps['defaultSetOptions']

const useCookie = <T>(key: string) => {
  const [cookies, setCookies, removeCookies] = useCookies([key])

  const value = cookies[key] as T

  const set = useCallback(
    (value: T | null | undefined, opts?: SetCookieOptions) =>
      setCookies(key, value, opts),
    [key, setCookies],
  )

  const remove = useCallback(
    (opts?: SetCookieOptions) => removeCookies(key, opts),
    [key, removeCookies],
  )

  return [value, set, remove] as const
}

export { useCookie }
export type { SetCookieOptions }
