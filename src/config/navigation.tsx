import type { ReactChildren } from '~/lib/types'

import { StarIcon } from '~/components/ui/icons/star'
import { CardIcon } from '~/components/ui/icons/card'
import { CartIcon } from '~/components/ui/icons/cart'
import { BookIcon } from '~/components/ui/icons/book'
import { HeartIcon } from '~/components/ui/icons/heart'
import { DoctorIcon } from '~/components/ui/icons/doctor'
import { LaptopIcon } from '~/components/ui/icons/laptop'
import { SupportIcon } from '~/components/ui/icons/support'
import { BookmarkIcon } from '~/components/ui/icons/bookmark'
import { MessageCheckIcon } from '~/components/ui/icons/message-check'

type LinkConfig = {
  id: string
  name: string
  href: string
  icon?: ReactChildren
}

type NavigationConfig = {
  [key: string]:
    | LinkConfig
    | {
        [key: string]: LinkConfig
      }
}

const navigation = {
  account: {
    anamnesis: {
      id: 'anamnesis',
      name: 'Мой анамнез',
      href: '/account/settings',
      icon: <BookIcon />,
    },
    appointment: {
      id: 'appointment',
      name: 'Запись к врачу оффлайн',
      href: '/account/appointment',
      icon: <DoctorIcon />,
    },
    consult: {
      id: 'consult',
      name: 'Онлайн консультация',
      href: '/account/consult',
      icon: <LaptopIcon />,
    },
    chat: {
      id: 'chat',
      name: 'Чат с врачом',
      href: '/account/chat',
      icon: <MessageCheckIcon />,
    },
    saved: {
      id: 'saved',
      name: 'Закладки',
      href: '/account/saved',
      icon: <BookmarkIcon />,
    },
    cart: {
      id: 'cart',
      name: 'Корзина',
      href: '/account/cart',
      icon: <CartIcon />,
    },
    pay: {
      id: 'pay',
      name: 'Выбор способа оплаты',
      href: '/account/pay',
      icon: <CardIcon />,
    },
    liked: {
      id: 'liked',
      name: 'Избранное',
      href: '/account/liked',
      icon: <HeartIcon />,
    },
    support: {
      id: 'support',
      name: 'Техническая поддержка',
      href: '/account/support',
      icon: <SupportIcon />,
    },
    review: {
      id: 'review',
      name: 'Оставить отзыв',
      href: '/account/review',
      icon: <StarIcon />,
    },
  },
} satisfies NavigationConfig

export { navigation }
