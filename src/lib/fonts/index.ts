import localFont from 'next/font/local'

const gilroy = localFont({
  display: 'swap',
  variable: '--font-gilroy',
  src: [
    {
      path: './gilroy-normal.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './gilroy-medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './gilroy-bold.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
})

const helvetica = localFont({
  display: 'swap',
  variable: '--font-helvetica',
  src: [
    {
      path: './helvetica-normal.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './helvetica-normal-light.woff',
      weight: '400',
      style: 'italic',
    },
    {
      path: './helvetica-medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: './helvetica-bold.woff',
      style: 'normal',
      weight: '700',
    },
  ],
})

const vars = {
  helvetica: helvetica.variable,
  gilroy: gilroy.variable,
}

const fontsClassName = [
  helvetica.variable,
  gilroy.variable,
  'antialiased',
].join(' ')

export { vars, fontsClassName }
