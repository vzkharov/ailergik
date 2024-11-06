type PartnerDoctor = {
  id: string
  img: string
  title: string
}

const doctors = [
  {
    id: '1',
    img: '/partners/doctors/_1.png',
    title: 'Аллергологи',
  },
  {
    id: '2',
    img: '/partners/doctors/_2.png',
    title: 'Гастроэнтерологи',
  },
  {
    id: '3',
    img: '/partners/doctors/_3.png',
    title: 'Дерматологи',
  },
  {
    id: '4',
    img: '/partners/doctors/_4.png',
    title: 'Неврологи',
  },
] satisfies PartnerDoctor[]

export { doctors }
