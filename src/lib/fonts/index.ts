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
