'use client'

import type { Provider } from '~/lib/types'

import { Toaster } from '~/components/ui/sonner'

const Providers: Provider = ({ children }) => (
  <>
    {children}
    <Toaster />
  </>
)

export { Providers }
