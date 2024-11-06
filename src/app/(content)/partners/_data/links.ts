type PartnerLink = {
  id: string
  href: string
  title: string
  className?: string
}

const navigation = {
  benefits: {
    id: 'benefits',
    href: '/partners#benefits',
    title: 'Преимущества',
    className: '',
  },
  sections: {
    id: 'sections',
    href: '/partners#sections',
    title: 'Разделы',
    className: '',
  },
  funcs: {
    id: 'funcs',
    href: '/partners#funcs',
    title: 'Функции',
    className: '',
  },
  join: {
    id: 'join',
    href: '/partners#join',
    title: 'Стать партнером',
    className: '',
  },
  contacts: {
    id: 'contacts',
    href: '/partners#contacts',
    title: 'Контакты',
    className:
      'ml-5 rounded-full bg-[#142850] text-white flex-center h-fit py-2.5',
  },
} satisfies Record<string, PartnerLink>

export { navigation }
