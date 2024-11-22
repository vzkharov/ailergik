'use client'

import { useState } from 'react'

import { cn } from '~/lib/utils'
import { StyleProps } from '~/lib/types'

import OtpInput from 'react-otp-input'

import { SubmitButton } from '../form'

import { Text } from '../ui/text'
import { Button } from '../ui/button'
import { DialogContent, DialogDescription, DialogHeader } from '../ui/dialog'

const OtpForm = ({ className }: StyleProps) => {
  const [otp, setOtp] = useState('')

  return (
    <DialogContent className="bg-white/80 p-6 backdrop-blur-md">
      <DialogHeader className="mt-10 text-center font-helvetica text-xl font-medium uppercase">
        вход в Аккаунт пациента
      </DialogHeader>
      <DialogDescription className="text-center text-xs">
        Пожалуйста, введите код, отправленный вам в СМС. Этот код нужен для
        подтверждения вашей личности и завершения процесса регистрации
      </DialogDescription>

      <form className={cn('mt-5 flex flex-col gap-y-5', className)}>
        <p className="text-sm font-bold uppercase">введите смс-код</p>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={4}
          shouldAutoFocus={true}
          renderSeparator={<span style={{ width: '20px' }}></span>}
          inputStyle={{
            border: '1px solid #142850',
            backgroundColor: 'transparent',
            borderRadius: '18px',
            width: '60px',
            height: '80px',
            fontSize: '40px',
            color: '#142850',
            fontWeight: '400',
            caretColor: '#142850',
          }}
          renderInput={props => <input {...props} />}
        />

        <Text size="xs" className="min-w-0 max-w-fit select-none font-normal">
          Если вы не получили код, нажмите&nbsp;
          <Button variant="otp" className="w-fit">
            Отправить код повторно
          </Button>
        </Text>

        <SubmitButton className="my-4 w-full">Продолжить</SubmitButton>
      </form>
    </DialogContent>
  )
}

export { OtpForm }
