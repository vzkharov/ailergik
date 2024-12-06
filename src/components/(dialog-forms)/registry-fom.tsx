import { cn } from '~/lib/utils'
import { StyleProps } from '~/lib/types'

import { Input } from '../ui/input'

import { Separator } from '~/components/ui/separator'
import { AgreementCheckbox } from '../(buttons)/agreement-checkbox'
import { DialogContent, DialogHeader } from '../ui/dialog'
import { SubmitButton } from '../modules/be-partner-form/be-partner-form'

const RegistryForm = ({ className }: StyleProps) => (
  <DialogContent className="bg-white/80 p-6 backdrop-blur-md">
    <DialogHeader className="mt-10 text-center font-helvetica text-xl font-medium uppercase">
      Регистрация
    </DialogHeader>

    <form className={cn('flex flex-col gap-y-5', className)}>
      <Input
        type="tel"
        placeholder="Введите ваш телефон*"
        variant="outline"
        className="my-2"
      />

      <Input
        type="email"
        placeholder="Введите ваш e-mail"
        variant="outline"
        className="my-2"
      />

      <SubmitButton className="my-3 w-full">Продолжить</SubmitButton>

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
    </form>
  </DialogContent>
)

export { RegistryForm }
