'use client'

import { toast } from 'sonner'

import { cn } from '~/lib/utils'

import { useCallback } from 'react'
import { useFormStatus } from 'react-dom'

import type { MergeWithHTMLProps } from '~/lib/types'

import { submitBePartnerform } from './action'
import { Button, ButtonProps } from '~/components/ui/button'

type Props = Partial<{
  onSettled: () => Promise<unknown> | unknown
  onError: () => Promise<unknown> | unknown
  onSuccess: () => Promise<unknown> | unknown
}>

type BePartnerFormProps = MergeWithHTMLProps<'form', Props>

const BePartnerForm = ({
  children,
  onError,
  onSuccess,
  onSettled,
  ...props
}: BePartnerFormProps) => {
  const handleSubmit = useCallback(
    async (formData: FormData) => {
      const promise = submitBePartnerform(formData)

      const toastId = toast.loading('Загрузка...', {
        description: 'Отправляем Вашу заявку на сервер...',
      })

      await promise
        .then(data => {
          const success = data.success

          if (success) {
            toast.success('Успешно!', {
              id: toastId,
              description: data.message,
            })
            onSuccess?.()
          } else {
            toast.error('Что-то пошло не так', {
              id: toastId,
              description: data.message,
            })
            onError?.()
          }
        })
        .finally(onSettled)
    },
    [onError, onSuccess, onSettled],
  )

  return (
    <form {...props} action={handleSubmit}>
      {children}
    </form>
  )
}

const SubmitButton = ({
  children,
  className,
  variant = 'outline',
  ...props
}: ButtonProps) => {
  const { pending } = useFormStatus()

  return (
    <Button
      {...props}
      disabled={pending}
      variant={variant}
      className={cn('', className)}
    >
      {pending ? 'Идет отправка...' : children}
    </Button>
  )
}

export { BePartnerForm, SubmitButton }
export type { BePartnerFormProps }
