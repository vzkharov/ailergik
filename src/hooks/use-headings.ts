'use client'

import { useEffect, useMemo, useState, useTransition } from 'react'

type HeadingConfig = {
  id: string
  title: string
  level: number
}

const useHeadings = (_levels: number[] = [1, 2, 3, 4, 5, 6]) => {
  const [headings, setHeadings] = useState<HeadingConfig[]>([])
  const [isPending, startTransition] = useTransition()

  const levels = useMemo(() => _levels, [_levels])

  useEffect(() => {
    startTransition(() => {
      const elements = [
        ...document.querySelectorAll(
          levels.map(level => 'h' + level).join(', '),
        ),
      ]

      const headingData = elements.map(element => ({
        id: element.id,
        title: element.innerHTML,
        level: Number(element.tagName.charAt(1)),
      }))

      setHeadings(headingData)
    })
  }, [levels])

  return [headings, isPending] as const
}

export { useHeadings }
