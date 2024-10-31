'use client'

import { useDebouncedCallback } from 'use-debounce'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

type UseQueryStateOpts<V> = Partial<{
  debounce?: number | undefined
  defaultValue?: V | undefined
}>

const useQueryState = <V>(key: string, opts: UseQueryStateOpts<V> = {}) => {
  const { debounce, defaultValue } = opts

  const pathname = usePathname()
  const { replace } = useRouter()
  const searchParams = useSearchParams()

  const state = searchParams.get(key) || defaultValue

  const setState = useDebouncedCallback((arg: V) => {
    const params = new URLSearchParams(searchParams.toString())

    if (arg) {
      params.set(key, String(arg))
    } else {
      params.delete(key)
    }

    const url = `${pathname}?${params.toString()}`

    replace(url)
  }, debounce)

  return [state, setState] as const
}

type UseQueryStateResult = ReturnType<typeof useQueryState>

export { useQueryState }
export type { UseQueryStateOpts, UseQueryStateResult }
