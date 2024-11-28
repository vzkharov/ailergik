import type { FilterState } from './types'

const defaultFilterState = {
  page: 1,
  subsection: '',
} satisfies FilterState

const convertRawState = (stateStr?: string): FilterState => {
  const rawState = JSON.parse(stateStr || '{}') as unknown as FilterState

  return {
    page: Number(rawState.page) || defaultFilterState.page,
    subsection: rawState.subsection || defaultFilterState.subsection,
  }
}

export { convertRawState, defaultFilterState }
