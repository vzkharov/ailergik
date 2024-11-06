type PartnerBenefit = {
  id: string
  img: string
  title: string
  card?: {
    title: string
  }
}

const benefits = [
  {
    id: '1',
    img: '/partners/benefits/_1.png',
    title: 'Интересный видео-контент для ваших социальных сетей',
  },
  {
    id: '2',
    img: '/partners/benefits/_2.png',
    title: 'Упоминание вашей компании во всех наших интернет-ресурсах',
    card: {
      title: 'Дополнительная бесплатная реклама',
    },
  },
  {
    id: '3',
    img: '/partners/benefits/_3.png',
    title:
      'Первые участники получат статус резидента нашего веб-приложения на особых правах',
    card: {
      title: 'Обмен аудиториями, расширение клиентской базы',
    },
  },
] satisfies PartnerBenefit[]

export { benefits }
