import localFont from 'next/font/local'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

const vars = {
  mono: geistMono.variable,
  geist: geistSans.variable,
}

const fontsClassName = [
  geistSans.variable,
  geistMono.variable,
  'antialiased',
].join(' ')

export { vars, fontsClassName }
