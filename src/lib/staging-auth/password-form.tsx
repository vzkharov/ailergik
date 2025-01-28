import { tv } from 'tailwind-variants'

import { Input } from '~/components/ui/input'
import { Button } from '~/components/ui/button'

import { validatePassword } from './utils'

const PasswordForm = () => (
  <div className={styles.wrapper()}>
    <div className={styles.root()}>
      <h1 className={styles.title()}>Staging Environment</h1>
      <form
        action={async formData => {
          'use server'
          await validatePassword(formData)
        }}
      >
        <Input
          required
          id="password"
          type="password"
          name="password"
          placeholder="Enter password"
          className={styles.input()}
        />

        <Button type="submit" className={styles.submitButton()}>
          Access Staging
        </Button>
      </form>
    </div>
  </div>
)

const styles = tv({
  slots: {
    wrapper: 'flex min-h-screen items-center justify-center bg-gray-100',
    root: 'min-w-96 rounded-md bg-white p-6',
    title: 'mb-4 text-xl font-bold',
    input: 'mb-4 h-10 bg-gray-100 placeholder:not-italic',
    submitButton: 'h-10 w-full',
  },
})()

export { PasswordForm }
