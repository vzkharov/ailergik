type PartnerProblem = {
  id: string
  img: string
  title: string
  description: string
  imageClassName: string
}

const problems = [
  {
    id: '1',
    img: '/partners/problems/_1.png',
    title: 'Экономит время пользователей',
    description: 'Все необходимые сервисы в одном веб-приложении',
    imageClassName: 'w-[456]',
  },
  {
    id: '2',
    img: '/partners/problems/_2.png',
    title: 'Полная и достоверная информация',
    description:
      'Сотни статей с информацией на основе официальных источников доказательной медицины',
    imageClassName: 'w-[456]',
  },
  {
    id: '3',
    img: '/partners/problems/_3.png',
    title: 'Ваш личный аллерголог всегда на связи',
    description: 'Онлайн-консультация с практикующими опытными врачами',
    imageClassName: 'w-[553]',
  },
] satisfies PartnerProblem[]

export { problems }
