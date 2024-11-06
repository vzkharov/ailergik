type PartnerTopic = {
  id: string
  title: string
  color: string
  description: string

  content: string
}

const topics = [
  {
    id: '1',
    title: 'МЕДИЦИНА',
    description:
      'Приглашаем врачей, мед.центры, лаборатории, аптеки, фарма- компании',
    color: '#6ED6B2',
    content: '',
  },
  {
    id: '2',
    title: 'ЕДА',
    description:
      'Приглашаем специалистов по питанию, магазины с доставкой, фуд сервисы здорового питания',
    color: '#FFCD69',
    content: '',
  },
  {
    id: '3',
    title: 'ДОМ',
    description:
      'Приглашаем магазины предметов интерьера для дома, гаджетов, эко- бытовой химии, клининоговые компании...',
    color: '#E9A777',
    content: '',
  },
  {
    id: '4',
    title: 'ТУРИЗМ',
    description: 'Приглашаем тур-агентства, страховые компании',
    color: '#8CB3F6',
    content: '',
  },
] satisfies PartnerTopic[]

export { topics }
