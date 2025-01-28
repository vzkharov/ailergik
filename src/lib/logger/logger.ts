import pretty from 'pino-pretty'
import pino, { Logger } from 'pino'

export { type LogFn } from 'pino'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const createLogger = (name: string): Logger =>
  pino(
    pretty({
      colorize: true,
    }),
  )

export { createLogger }
