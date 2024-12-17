import type { FilterState } from './types'

const defaultFilterState = {
  page: 1,
} satisfies FilterState

const convertRawState = (stateStr?: string): FilterState => {
  const rawState = JSON.parse(stateStr || '{}') as unknown as FilterState

  return {
    ...rawState,
    page: Number(rawState.page) || defaultFilterState.page,
  }
}

export { convertRawState, defaultFilterState }
