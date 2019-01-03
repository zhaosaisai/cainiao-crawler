const got = require('got')
const load = require('./load')
const log = require('./log')
const { url } = require('./source')

async function start() {
  log.info(`正在抓取 ${url}`)
  const response = await got(url)
  log.success(`抓取成功 ${url}`)
  log.info(`开始解析 ${url}`)
  await load(response.body || '')
}

!module.parent && start()
