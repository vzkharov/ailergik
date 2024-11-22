import { cn } from '~/lib/utils'
import { StyleProps } from '~/lib/types'

import { Form, SubmitButton } from '../form'
import { Link } from '../ui/link'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

import { DialogContent, DialogHeader } from '../ui/dialog'
import { Separator } from '~/components/ui/separator'
import { AgreementCheckbox } from '../(buttons)/agreement-checkbox'

const EntryForm = ({ className }: StyleProps) => (
  <DialogContent className="bg-white/80 p-6 backdrop-blur-md">
    <DialogHeader className="mt-10 text-center font-helvetica text-xl font-medium uppercase">
      вход в Аккаунт Врача
    </DialogHeader>
    <Form className={cn('flex flex-col gap-y-5', className)}>
      <Input
        placeholder="Введите ваш телефон*"
        variant="outline"
        className="my-2"
      />

      <SubmitButton className="mt-6 w-full">Отправить смс-код</SubmitButton>

      <Link
        className="font-hevetica w-fit cursor-pointer self-center text-xs font-bold underline"
        href=""
      >
        Регистрация врача
      </Link>

      <Separator className="bg-[#B1B1B3]" />

      <AgreementCheckbox
        required
        id="agreement"
        name="agreement"
        className="mt-4"
        text="Отправляя сообщение вы соглашаетесь с нашей"
        legal="Политикой конфиденциальности"
        href=""
      />
      <AgreementCheckbox
        required
        id="agreement"
        name="agreement"
        className="mt-4"
        text="Я даю свое согласие на обработку моих персональных данных, а также подтверждаю ознакомление с"
        legal="Политикой обработки персональных данных"
        href=""
      />
    </Form>
  </DialogContent>
)

const EnteredPerson = () => (
  <DialogContent className="bg-white/80 p-6 backdrop-blur-sm">
    <DialogHeader className="mt-10 text-center font-helvetica text-xl uppercase">
      Аккаунт пациента
    </DialogHeader>

    <Button className="mt-10 w-full" variant="outline">
      Я - пациент
    </Button>
  </DialogContent>
)

export { EntryForm, EnteredPerson }
