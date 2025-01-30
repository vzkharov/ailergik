'use client'

import { tv } from 'tailwind-variants'
import { useCallback, type FormEvent } from 'react'

import type { StyleProps } from '~/lib/types'

import { Input } from '~/components/ui/input'
import { Separator } from '~/components/ui/separator'
import { SubmitButton } from '~/components/(buttons)/submit-button'
import { AgreementCheckbox } from '~/components/(buttons)/agreement-checkbox'

type Values = {
  email?: string
  phone: string
}

type EntryFormProps = StyleProps & {
  onSubmit?: (values: Values) => unknown
}

const EntryForm = (props: EntryFormProps) => {
  const { onSubmit, style, className } = props

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const formData = new FormData(e.currentTarget)

      const payload = {
        phone: formData.get('phone') as string,
        email: formData.get('email') as string | undefined,
      }

      onSubmit?.(payload)
    },
    [onSubmit],
  )

  return (
    <form
      onSubmit={handleSubmit}
      style={style}
      className={styles.form({ className })}
    >
      <Input
        id="phone"
        name="phone"
        variant="outline"
        placeholder="Введите ваш телефон*"
        className={styles.input()}
      />

      <Input
        id="email"
        name="email"
        variant="outline"
        placeholder="Введите ваш e-mail"
        className={styles.input()}
      />

      <SubmitButton className={styles.submitButton()}>Продолжить</SubmitButton>

      <Separator />

      <AgreementCheckbox
        required
        href=""
        id="agreement"
        name="agreement"
        text="Отправляя сообщение вы соглашаетесь с нашей"
        legal="Политикой конфиденциальности"
        className={styles.checkbox()}
      />
      <AgreementCheckbox
        required
        href=""
        id="agreement"
        name="agreement"
        text="Я даю свое согласие на обработку моих персональных данных, а также подтверждаю ознакомление с"
        legal="Политикой обработки персональных данных"
        className={styles.checkbox()}
      />
    </form>
  )
}

const styles = tv({
  slots: {
    form: 'flex flex-col gap-y-5',
    input: 'my-2',
    checkbox: '',
    submitButton: 'my-3 w-full',
  },
})()

export { EntryForm }
export type { Values as EntryValues }
