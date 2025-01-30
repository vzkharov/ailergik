'use client'

import { FormEvent, useCallback, useState } from 'react'
import { tv } from 'tailwind-variants'

import type { StyleProps } from '~/lib/types'

import { Text } from '~/components/ui/text'
import { Button } from '~/components/ui/button'
import { OtpInput } from '~/components/(inputs)/otp-input'
import { SubmitButton } from '~/components/(buttons)/submit-button'

type Values = {
  otp: string
}

type OtpFormProps = StyleProps & {
  onSubmit?: (values: Values) => unknown
}

const OtpForm = (props: OtpFormProps) => {
  const { onSubmit, style, className } = props

  const [otp, setOtp] = useState('')

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      onSubmit?.({ otp })
    },
    [otp, onSubmit],
  )

  return (
    <form
      onSubmit={handleSubmit}
      style={style}
      className={styles.form({ className })}
    >
      <OtpInput value={otp} onChange={setOtp} numInputs={4} shouldAutoFocus />

      <Text size="xs" className={styles.retryText()}>
        Если вы не получили код, нажмите&nbsp;
        <Button variant="otp" className={styles.retryButton()}>
          Отправить код повторно
        </Button>
      </Text>

      <SubmitButton className={styles.submitButton()}>Продолжить</SubmitButton>
    </form>
  )
}

const styles = tv({
  slots: {
    form: 'mt-5 flex flex-col gap-y-5 items-center',
    title: 'text-sm font-bold uppercase',
    retryText: 'min-w-0 max-w-fit select-none font-normal',
    retryButton: 'w-fit -translate-y-0.5',
    submitButton: 'my-4 w-full',
  },
})()

export { OtpForm }
export type { Values as OtpValues }
