import { createLogger, format, transports } from 'winston'
import 'winston-daily-rotate-file'
import isEmpty from 'lodash/isEmpty'

const { combine, timestamp, printf, colorize } = format

interface FormatOptions {
  prettyPrint?: boolean
}

const myFormat = (options: FormatOptions | undefined = {}) =>
  printf(({ level, message, timestamp: timestampString, ...rest }) => {
    if (isEmpty(rest)) return `${timestampString} ${level}: ${message}`
    return `${timestampString} ${level}: ${message} ${JSON.stringify(
      rest,
      null,
      options.prettyPrint ? 2 : undefined,
    )}`
  })

const Logger = createLogger({
  format: combine(timestamp(), myFormat()),
  transports: [
    new transports.DailyRotateFile({
      filename: 'error.log.%DATE%',
      dirname: './logs',
      frequency: '168h', // 1 week
      level: 'error',
    }),
    new transports.DailyRotateFile({
      filename: 'info.log.%DATE%',
      dirname: './logs',
      frequency: '168h', // 1 week
    }),
  ],
})

if (process.env.NODE_ENV !== 'production') {
  Logger.add(
    new transports.Console({
      format: combine(timestamp(), colorize(), myFormat({ prettyPrint: true })),
    }),
  )
}

export { Logger }
