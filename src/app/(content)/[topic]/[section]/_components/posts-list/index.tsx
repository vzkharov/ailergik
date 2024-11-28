import { Suspense } from 'react'

import { ErrorBoundary } from '~/lib/error-boundary'

import { ErrorComponent } from './error'
import { LoadingComponent } from './loading'
import { Component, type ComponentProps } from './component'

const PostsList = (props: ComponentProps) => (
  <ErrorBoundary fallback={<ErrorComponent />}>
    <Suspense
      key={JSON.stringify(props)}
      fallback={<LoadingComponent {...props} />}
    >
      <Component {...props} />
    </Suspense>
  </ErrorBoundary>
)

export { PostsList }
