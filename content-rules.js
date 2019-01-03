const cheerio = require('cheerio')
const h2m = require('h2m')
const fs = require('fs')
const path = require('path')
const got = require('got')
const log = require('./log')
const { dist } = require('./source')

exports.createReadable = function(str) {
  const Readable = require('stream').Readable
  const _r = new Readable
  _r.push(str)
  _r.push(null)
  return _r
}

module.exports = async function(link, cmd) {
  try {
    const html = (await got(link)).body
    const $ = cheerio.load(html, { decodeEntities: false })
    const $content = $('#content')
    // 删除无效的内容
    $content.find('p a').remove()
    // 转为html -> md
    exports
      .createReadable(h2m($content.html()))
      .pipe(
        fs.createWriteStream(
          path.resolve(__dirname, dist, `${cmd}.md`)
        )
      )
    log.success(`【${cmd}】命令解析成功 --> ${link}`)
  } catch(e) {
    log.error(`【${cmd}】命令解析失败 【${e.message}】 --> ${link}`)
  }
}