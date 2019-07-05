// @ts-check

import chalk from 'chalk'

/**
 * 
 * @param {string} content 
 * @param {string} logLevel 
 */
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