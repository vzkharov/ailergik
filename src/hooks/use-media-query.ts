'use client'

import { useState, useEffect, useCallback } from 'react'

const useMediaQuery = (width: string | number): boolean => {
  const [targetReached, setTargetReached] = useState<boolean>(false)

  const updateTarget = useCallback(
    (e: MediaQueryListEvent) => {
      if (e.matches) {
        setTargetReached(true)
      } else {
        setTargetReached(false)
      }
    },
    [setTargetReached],
  )

  useEffect(() => {
    if (typeof globalThis === 'undefined') {
      return
    }

    const media = globalThis.matchMedia(`(max-width: ${width}px)`)
    media.addEventListener('change', updateTarget)

    if (media.matches) {
      setTargetReached(true)
    }

    return () => media.removeEventListener('change', updateTarget)
  }, [setTargetReached, width, updateTarget])

  return targetReached
}

export { useMediaQuery }
