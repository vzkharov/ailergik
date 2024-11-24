'use client'

import { cn } from '~/lib/utils'
import type { StyleProps } from '~/lib/types'

import { InfoIcon } from 'lucide-react'
import { SearchIcon } from '../ui/icons/search-icon'
import { LocationIcon } from '~/components/ui/icons/location'

import { Input } from '~/components/ui/input'
import { Button } from '~/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'

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
      <DialogTrigger asChild>
        <Button
          style={style}
          variant="ghost"
          startContent={<LocationIcon className="h-7 w-7" />}
          className={cn('gap-sm font-normal', className)}
        >
          Новополоцк
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[382px] gap-y-5 bg-white/80 p-6 backdrop-blur-md">
        <DialogHeader className="mt-10">
          <DialogTitle className="text-center font-helvetica text-xl uppercase">
            Населенный пункт
          </DialogTitle>
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
