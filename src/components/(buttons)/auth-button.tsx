import { cn } from '~/lib/utils'

import { UserIcon } from '~/components/ui/icons/user'
import { Button, type ButtonProps } from '~/components/ui/button'
import { Dialog } from '@radix-ui/react-dialog'
import { DialogContent, DialogHeader, DialogTrigger } from '../ui/dialog'
import { Input } from '../ui/input'
import { Link } from '../ui/link'

import { Separator } from '~/components/ui/separator'
import { AgreementCheckbox } from './agreement-checkbox'

const AuthButton = ({
  className,
  children = 'ВХОД',
  variant = 'outline',
  ...props
}: ButtonProps) => (
  <Dialog>
    <DialogTrigger>
      <Button
        variant={variant}
        {...props}
        icon={<UserIcon className="h-5 w-5" />}
        className={cn('px-6', className)}
      >
        {children}
      </Button>
    </DialogTrigger>
    <DialogContent className="bg-white/80 p-6 backdrop-blur-sm">
      <DialogHeader className="mt-10 text-center font-helvetica text-xl uppercase">
        Аккаунт пациента
      </DialogHeader>

      <form className="flex flex-col gap-y-5">
        <Input placeholder="Введите ваш телефон*" variant="outline" />

        <Button className="w-full" variant="outline">
          Отправить смс-код
        </Button>

        <Link
          className="font-hevetica w-fit cursor-pointer self-center text-xs font-bold underline"
          href=""
        >
          Регистрация пациента
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
      </form>
    </DialogContent>
  </Dialog>
)

export { AuthButton }

const AccountButton = () => (
  <Dialog>
    <DialogTrigger></DialogTrigger>
    <DialogContent className="bg-white/80 p-6 backdrop-blur-sm">
      <DialogHeader className="mt-10 text-center font-helvetica text-xl uppercase">
        Аккаунт пациента
      </DialogHeader>

      <Button className="w-full" variant="outline">
        Я - пациент
      </Button>
    </DialogContent>
  </Dialog>
)

export { AccountButton }
