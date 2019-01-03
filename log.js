const chalk = require('chalk')
const log = console.log.bind(console)

log.info = (reason) => log(chalk.blue(reason))
log.success = (reason) => log(chalk.green(reason))
log.error = (reason) => log(chalk.red(reason))
log.line = () => log(chalk.yellow('='.repeat(100)))

module.exports = log