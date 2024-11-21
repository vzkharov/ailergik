'use client'

import { cn } from '~/lib/utils'
import type { StyleProps } from '~/lib/types'

import { Button } from '~/components/ui/button'
import { LocationIcon } from '~/components/ui/icons/location'
import { Dialog } from '@radix-ui/react-dialog'
import { DialogContent, DialogHeader, DialogTrigger } from '../ui/dialog'
import { InfoIcon } from 'lucide-react'

import { Input } from '~/components/ui/input'
import { SearchIcon } from '../ui/icons/search-icon'

const cities = [
  'Минск',
  'Брест',
  'Витебск',
  'Гомель',
  'Гродно',
  'Могилев',
  'Барановичи',
  'Бобруйск',
  'Пинск',
  'Орша',
  'Лида',
  'Солигорск',
  'Новополоцк',
  'Мозырь',
  'Светлогорск',
  'Жлобин',
  'Речица',
  'Кобрин',
  'Полоцк',
  'Борисов',
  'Горки',
  'Осиповичи',
  'Слоним',
  'Калинковичи',
  'Волковыск',
  'Берёза',
  'Жодино',
  'Дзержинск',
  'Новогрудок',
  'Столбцы',
]

const LocationButton = ({ style, className }: StyleProps) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button
          style={style}
          variant="ghost"
          startContent={<LocationIcon className="h-7 w-7" />}
          className={cn('gap-sm font-normal', className)}
        >
          Новополоцк
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[382px] gap-y-5 bg-white/80 p-6 backdrop-blur-sm">
        <DialogHeader className="mt-10 text-center font-helvetica text-xl uppercase">
          Населенный пункт
        </DialogHeader>

        <div className="flex flex-col gap-y-3">
          <Input
            placeholder="Введите ваш населеный пункт"
            variant="solid"
            autoFocus
            type="text"
            className="w-full"
            endContent={<SearchIcon />}
          />

          <div className="flex flex-row gap-x-2">
            <InfoIcon width={20} height={20} />
            <span className="w-full text-left text-xs leading-3">
              Вам будут показаны условия доставки для выбранного населенного
              пункта. Если населенный пункт не найден, то доставка в него
              временно недоступна.
            </span>
          </div>
        </div>

        <div className="scrollbar-custom h-48 w-full overflow-y-auto hover:cursor-pointer">
          <ul className="text-base ml-6 space-y-3 font-helvetica text-gray-900">
            {cities.map((city, index) => (
              <li key={index} className="text-sm hover:text-[#142850]/50">
                {city}
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export { LocationButton }
