type PartnerService = {
  id: string
  href: string

  img: string
  title: string
}

const services = [
  {
    id: '1',
    href: '',
    title:
      'Первая умная AI-платформа для аллергиков на базе инновационных технологий',
    img: '/partners/services/_1.png',
  },
  {
    id: '2',
    href: '',
    title: '1000 статей и видео полезной информации об аллергии',
    img: '/partners/services/_2.png',
  },
  {
    id: '3',
    href: '',
    title: 'Все необходимые сервисы для аллергиков в одном интернет - ресурсе',
    img: '/partners/services/_3.png',
  },
  {
    id: '4',
    href: '',
    title:
      'Онлайн - консультация практикующего врача аллерголога в удобное время',
    img: '/partners/services/_4.png',
  },
] satisfies PartnerService[]

export { services }
