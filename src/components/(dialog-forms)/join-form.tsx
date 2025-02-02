import { cn } from '~/lib/utils'
import { StyleProps } from '~/lib/types'

import { Input } from '../ui/input'
import { Button } from '../ui/button'

import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog'

import { AgreementCheckbox } from '../(buttons)/agreement-checkbox'
import {
  BePartnerForm,
  SubmitButton,
} from '../modules/be-partner-form/be-partner-form'

const JoinForm = ({ className }: StyleProps) => (
  <DialogContent className="max-w-3xl bg-white/80 p-6 backdrop-blur-md">
    <DialogHeader className="mt-10 space-y-5 text-left">
      <DialogTitle className="font-helvetica text-3xl font-normal uppercase max-md:text-xl">
        мы вам перезвоним
      </DialogTitle>
      <DialogDescription className="text-lg italic text-current max-md:text-md">
        Пожалуйста, ожидайте нашего звонка, мы свяжемся с вами в ближайшее
        время, чтобы обсудить все детали!
      </DialogDescription>
    </DialogHeader>
    <BePartnerForm className={cn('flex flex-col gap-14', className)}>
      <Input type="text" placeholder="имя*" variant="outline" name="name" />

      <Input
        type="text"
        placeholder="Вид деятельности Вашей компании*"
        variant="outline"
        name="occupation"
      />

      <Input
        type="tel"
        placeholder="Ваш номер телефона*"
        variant="outline"
        name="phone"
      />
      <div className="space-y-5">
        <AgreementCheckbox
          required
          id="agreement"
          name="agreement"
          text="Отправляя сообщение вы соглашаетесь с нашей"
          legal="Политикой конфиденциальности"
          href=""
        />
        <AgreementCheckbox
          required
          id="agreement"
          name="agreement"
          text="Я даю свое согласие на обработку моих персональных данных, а также подтверждаю ознакомление с"
          legal="Политикой обработки персональных данных"
          href=""
        />
      </div>

      <SubmitButton variant="colored" className="h-14 w-full">
        Перезвонить мне
      </SubmitButton>
    </BePartnerForm>
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

export { JoinForm, EnteredPerson }
