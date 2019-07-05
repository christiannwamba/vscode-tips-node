import chalk from 'chalk'

export function prettyLog(content, logLevel) {
  const logLevels = {
    'SUCCESS': 'green',
    'WARN': 'yellow',
    'ERROR': 'red'
  };

  const logColor = logLevels[logLevel];
  const log = chalk[logColor](content)
  return console.log(log)
}