import type { Page } from '~/lib/types'

import { Title } from '~/components/title'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Spacer } from '~/components/ui/spacer'

const SettingsPage: Page = () => {
  return (
    <div className="flex flex-col">
      <Title
        highlight
        as="h3"
        className="text-xl !font-medium after:opacity-60"
      >
        Поздравляем с успешной регистрацией!
      </Title>
      <Spacer y="md" />
      <p className="text-md capitalize">Теперь у вас есть личный кабинет :)</p>
      <Spacer y="md" />
      <div className="relative flex gap-lg rounded-md bg-white p-lg">
        <div className="!aspect-square h-fit w-2/5 rounded-md bg-background" />
        <div className="flex flex-1 flex-col gap-y-2xl py-md">
          <p className="text-xl uppercase">Введите данные</p>
          <Input variant="outline" placeholder="Введите ваше имя" />
          <Input variant="outline" placeholder="Введите ваш e-mail" />
          <Input variant="outline" placeholder="Выберите дату рождения" />
          <div className="flex flex-col gap-y-xs">
            <label className="pb-sm text-xs font-medium uppercase">
              Укажите ваш пол
            </label>
          </div>
          <Button variant="outline">Сохранить</Button>
        </div>
      </div>
    </div>
  )
}

export default SettingsPage
