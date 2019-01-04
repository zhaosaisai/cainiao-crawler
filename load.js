const got = require('got')
const cheerio = require('cheerio')
const log = require('./log')
const { host } = require('./source')
const parseContent = require('./content-rules')

exports.total = 0
exports.success = 0
exports.error = 0

exports.isTarget = function(href) {
  return /(\/linux\/)?linux-comm-(\w+).html$/.test(href)
}

exports.serializeUrl = function(url) {
  return /^linux-comm-(\w+)/.test(url)
    ? `/linux/${url}`
    : url
}

module.exports = async function(html) {
  const $ = cheerio.load(html)
  const allLinks = $('#content').find('a')
    .filter((index, el) => exports.isTarget($(el).attr('href')))
    .toArray()
    .map(_ => exports.serializeUrl(_.attribs.href))

  exports.total = allLinks.length
  
  allLinks.forEach(async link => {
    const cmd = link.match(/linux-comm-(\w+)/)[1]
    try {
      await parseContent(host.concat(link), cmd)
      exports.success++
    } catch(e) {
      exports.error++
    }
  })
}

process.on('beforeExit', () => {
  log.bold(
    `抓取命令:\n\t总数：${exports.total}\n\t成功：${exports.success}\n\t失败：${exports.error}`
  )
})