'use client'

import { useMemo } from 'react'
import { useDebouncedCallback } from 'use-debounce'

import { useQueryState } from '~/hooks/use-query-state'

import type { FilterState } from './types'
import { convertRawState, defaultFilterState } from './utils'

const usePostsFilterState = (debounce: number = 0) => {
  const [_rawState, setRawState] = useQueryState<string>('state', {
    debounce: 0,
    defaultValue: JSON.stringify(defaultFilterState),
  })
  const state = useMemo(() => convertRawState(_rawState || '{}'), [_rawState])

  const handleChange = useDebouncedCallback((_state: Partial<FilterState>) => {
    const newState = { ...state, ..._state }
    setRawState(JSON.stringify(newState))
  }, debounce)

  return [state, handleChange] as const
}

export { usePostsFilterState }
