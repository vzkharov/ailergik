import localFont from 'next/font/local'

const geistSans = localFont({
  src: './geist.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './geist-mono.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

const gilroy = localFont({
  src: './gilroy-regular.ttf',
  display: 'swap',
  variable: '--font-gilroy',
})

const helveticaLight = localFont({
  src: './HelveticaNeueCyr-Light.woff',
  variable: '--font-helvetica-light',
  weight: '100 900',
})

const helveticaItalicLight = localFont({
  src: './HelveticaNeueCyr-ItalicLight.woff',
  variable: '--font-helvetica-italic-light',
  weight: '100 900',
})

const helveticaMedium = localFont({
  src: './HelveticaNeueCyr-Medium.woff',
  variable: '--font-helvetica-medium',
  weight: '100 900',
})

const helveticaBold = localFont({
  src: './HelveticaNeueCyr-Bold.woff',
  variable: '--font-helvetica-bold',
  weight: '100 900',
})

const vars = {
  mono: geistMono.variable,
  geist: geistSans.variable,
  helveticaLight: helveticaLight.variable,
  helveticaMedium: helveticaMedium.variable,
  helveticaBold: helveticaBold.variable,
  helveticaItalicLight: helveticaItalicLight.variable,
  gilroy: gilroy.variable,
}

const fontsClassName = [
  geistSans.variable,
  geistMono.variable,
  helveticaLight.variable,
  helveticaMedium.variable,
  helveticaBold.variable,
  helveticaItalicLight.variable,
  gilroy.variable,
  'antialiased',
].join(' ')

export { vars, fontsClassName }
