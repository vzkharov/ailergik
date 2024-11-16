type PartnerProblem = {
  id: string
  img: string
  title: string
  description?: string
  imageClassName: string
}

const blogs = [
  {
    id: '1',
    img: '/home/medicine/lifestyle/_1.png',
    title: 'Какой спорт выбрать при астме?',
    imageClassName: 'w-[360]',
  },
  {
    id: '2',
    img: '/home/medicine/lifestyle/_2.png',
    title: 'Про вейпы и кальяны. Могут ли вызвать аллергию?',
    imageClassName: 'w-[360] ',
  },
  {
    id: '3',
    img: '/home/medicine/lifestyle/_3.png',
    title: 'Аллергены будущего',
    imageClassName: 'w-[360]',
  },
  {
    id: '4',
    img: '/home/food/lifestyle/_1.png',
    title: 'Поход в ресторан. Советы аллергику',
    imageClassName: 'w-[360]',
  },
  {
    id: '5',
    img: '/home/food/lifestyle/_2.png',
    title: '5 полезных привычек, если у вас пищевая аллергия',
    imageClassName: 'w-[360]',
  },
  {
    id: '6',
    img: '/home/food/lifestyle/_3.png',
    title: 'Как питаться в школе ребенку аллергику',
    imageClassName: 'w-[360]',
  },
  {
    id: '7',
    img: '/home/house/lifestyle/_1.png',
    title:
      'Как создать уютную и безопасную детскую комнату для ребенка-аллергика',
    imageClassName: 'w-[360] ',
  },
  {
    id: '8',
    img: '/home/house/lifestyle/_2.png',
    title: 'Аллергены в кухне: как безопасно готовить и хранить продукты',
    imageClassName: 'w-[360]',
  },
  {
    id: '9',
    img: '/home/house/lifestyle/_3.png',
    title:
      'Аллергены в ванной комнате: как создать безопасную среду для гигиены',
    imageClassName: 'w-[360] ',
  },
  {
    id: '10',
    img: '/home/tourism/lifestyle/_1.png',
    title: 'О специальных турах для аллергиков',
    imageClassName: 'w-[360] ',
  },
  {
    id: '11',
    img: '/home/tourism/lifestyle/_2.png',
    title: 'Соляные пещеры',
    imageClassName: 'w-[360] ',
  },
  {
    id: '12',
    img: '/home/tourism/lifestyle/_3.png',
    title: 'Горы...',
    imageClassName: 'w-[360] ',
  },
] satisfies PartnerProblem[]

export { blogs }
