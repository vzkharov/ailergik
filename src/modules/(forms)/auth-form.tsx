'use client'

import Link from 'next/link'
import { tv } from 'tailwind-variants'
import { useCallback, useMemo, useState } from 'react'

import { useAuth } from '~/lib/auth/client'
import type { StyleProps } from '~/lib/types'

import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  DialogDescription,
} from '~/components/ui/dialog'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '~/components/ui/popover'
import { Button } from '~/components/ui/button'
import { Spinner } from '~/components/ui/spinner'
import { UserIcon } from '~/components/ui/icons/user'

import { OtpForm, type OtpValues } from './otp-form'
import { EntryForm, type EntryValues } from './entry-form'

type AuthButtonProps = StyleProps & {}

const AuthButton = (props: AuthButtonProps) => {
  const { style, className } = props

  const { user, send, check, signOut } = useAuth()

  const [userId, setUserId] = useState<string>()
  const [open, setOpen] = useState<boolean>(false)

  const handleSend = useCallback(
    async (values: EntryValues) => {
      const res = await send.mutateAsync({ json: values })
      const json = await res.json()

      setUserId(json.id)
    },
    [send],
  )

  const handleCheck = useCallback(
    async (values: OtpValues) => {
      if (!userId) {
        return
      }

      check
        .mutateAsync({ json: { userId, otp: values.otp } })
        .then(() => setOpen(false))
    },
    [check, userId],
  )

  const title = userId ? 'ВВЕДИТЕ СМС-КОД' : 'ВХОД'
  const description = userId
    ? 'Пожалуйста, введите код, отправленный вам в СМС. Этот код нужен для подтверждения вашей личности.'
    : ''

  const formLoading = send.isPending || check.isPending

  const trigger = useMemo(() => {
    const label = user.data ? 'ПРОФИЛЬ' : 'ВХОД'
    const isLoading = user.isLoading

    return (
      <Button
        style={style}
        variant="outline"
        readOnly={user.isLoading}
        icon={isLoading ? null : <UserIcon size={20} />}
        className={styles.trigger({ className })}
      >
        {isLoading ? <Spinner /> : label}
      </Button>
    )
  }, [user.data, user.isLoading, style, className])

  if (user.isLoading) {
    return trigger
  }

  if (user.data) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>{trigger}</PopoverTrigger>
        <PopoverContent width={224} sideOffset={0} className="bg-white">
          <Link href="/account" onClick={() => setOpen(false)}>
            <Button
              variant="ghost"
              className="w-full justify-start !px-2 text-md"
            >
              Изменить данные
            </Button>
          </Link>
          <Button
            variant="ghost"
            onClick={() => {
              setOpen(false)
              signOut.mutate({})
            }}
            className="w-full justify-start !px-2 text-md"
          >
            Выйти
          </Button>
        </PopoverContent>
      </Popover>
    )
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          style={style}
          variant="outline"
          icon={<UserIcon size={20} />}
          className={styles.trigger({ className })}
        >
          ВХОД
        </Button>
      </DialogTrigger>
      <DialogContent className={styles.content()}>
        <DialogHeader className={styles.header()}>
          <DialogTitle className={styles.title()}>{title}</DialogTitle>
          <DialogDescription className={styles.description()}>
            {description}
          </DialogDescription>
        </DialogHeader>

        {userId ? (
          <OtpForm onSubmit={handleCheck} />
        ) : (
          <EntryForm onSubmit={handleSend} />
        )}

        <div
          className={styles.overlay({
            className: formLoading
              ? 'opacity-50'
              : 'pointer-events-none opacity-0',
          })}
        />
      </DialogContent>
    </Dialog>
  )
}

const styles = tv({
  slots: {
    trigger: 'px-6 min-w-32',
    content:
      'bg-white/80 px-6 pt-12 pb-6 backdrop-blur-md overflow-hidden flex flex-col gap-y-sm',
    header: 'text-center flex flex-col gap-y-xs',
    title: 'font-helvetica text-xl font-medium uppercase',
    description: 'text-sm leading-normal',

    overlay: 'absolute inset-0 bg-white select-none transition-all',
  },
})()

export { AuthButton }
