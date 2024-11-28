'use client'

import { useMemo, useCallback } from 'react'

type UsePaginationUtilsArgs = {
  page: number
  onPageChange: (page: number) => unknown

  total?: number
  displayPages?: number
}

const usePaginationUtils = ({
  page,
  total,
  onPageChange,
  displayPages = 3,
}: UsePaginationUtilsArgs) => {
  const pages = useMemo(() => {
    const range = Array.from({ length: displayPages + 1 })
      .fill(0)
      .map((_, idx) => idx + page - 1)

    if (page > 0) {
      range.shift()
    } else {
      range.pop()
    }

    return range
  }, [page, displayPages])

  const next = useCallback(
    () => total && page < total && onPageChange(page + 1),
    [onPageChange, total, page],
  )
  const previos = useCallback(
    () => page > 1 && onPageChange(page - 1),
    [onPageChange, page],
  )

  return { next, previos, pages, isPrevios: page > 1 }
}

type UsePaginationUtilsReturn = ReturnType<typeof usePaginationUtils>

export { usePaginationUtils }
export type { UsePaginationUtilsArgs, UsePaginationUtilsReturn }
