'use client'

import { useState } from 'react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import type { Provider } from '~/lib/types'

import { Toaster } from '~/components/ui/sonner'

const Providers: Provider = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient({}))

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <Toaster />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export { Providers }
