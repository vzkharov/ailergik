'use client'

import { useCallback } from 'react'
import { useFormStatus } from 'react-dom'

import { Button, ButtonProps } from './ui/button'
import type { MergeWithHTMLProps } from '~/lib/types'

type Props = Partial<{
  onSettled: () => Promise<unknown> | unknown
  onError: () => Promise<unknown> | unknown
  onSuccess: () => Promise<unknown> | unknown
}>

type FormProps = MergeWithHTMLProps<'form', Props>

const Form = ({ children, ...props }: FormProps) => {
  const handleSubmit = useCallback(async (formData: FormData) => {
    //
    console.log(formData)
  }, [])

  return (
    <form {...props} action={handleSubmit}>
      {children}
    </form>
  )
}

const SubmitButton = ({ children, ...props }: ButtonProps) => {
  const { pending } = useFormStatus()

  return (
    <Button {...props} disabled={pending} variant="outline">
      {pending ? 'Идет отправка...' : children}
    </Button>
  )
}

export { Form, SubmitButton }
