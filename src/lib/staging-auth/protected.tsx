import type { ReactChildren } from '~/lib/types'

import { isAuth } from './utils'
import { PasswordForm } from './password-form'

const StagingProtected = async ({ children }: { children: ReactChildren }) => {
  const isAuthenticated = await isAuth()

  if (!isAuthenticated) {
    return <PasswordForm />
  }

  return children
}

export { StagingProtected }
