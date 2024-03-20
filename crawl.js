const jsdom = require('jsdom')
const { JSDOM } = jsdom;

function normalizeURL(url) {
  const parsedUrl = new URL(url)
  let normalized = `${parsedUrl.host}${parsedUrl.pathname}`
  if (normalized.length > 0 && normalized.slice(-1) === '/') {
    normalized = normalized.slice(0, -1)
  }
  return normalized
}

function getURLsFromHTML(htmlBody, baseUrl) {
  const urls = []
  const dom = new JSDOM(htmlBody)
  const links = dom.window.document.querySelectorAll('a')
  for (const link of links) {
    try {
      urls.push(new URL(link.href, baseUrl).href)
    } catch (err) {
      console.log(`${err.message}: ${link.href}`)
    }
  }
  return urls
}

module.exports = {
  normalizeURL,
  getURLsFromHTML
}
