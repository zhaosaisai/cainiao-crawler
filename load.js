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

exports.serizeUrl = function(url) {
  return /^linux-comm-(\w+)/.test(url)
    ? `/linux/${url}`
    : url
}

module.exports = async function(html) {
  const $ = cheerio.load(html)
  const allLinks = $('#content').find('a')
    .filter((index, el) => exports.isTarget($(el).attr('href')))
    .toArray()
    .map(_ => exports.serizeUrl(_.attribs.href))
  
  allLinks.forEach(link => {
    const cmd = link.match(/linux-comm-(\w+)/)[1]
    parseContent(host.concat(link), cmd)
  })
}