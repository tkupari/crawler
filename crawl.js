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

async function crawlPage(url) {
  try {
    res = await fetch(url, {
      method: 'GET'
    })
    if (res.status >= 400) {
      console.log(`error: ${res.status}`)
      return
    }
    content_type = res.headers.get("content-type")
    if (!content_type.includes("text/html")) {
      console.log(`got ${content_type} instead of text/html`)
      return
    }
    const body = await res.text()
    console.log(body)
  } catch (err) {
    console.log(err.message)
  }
}

module.exports = {
  normalizeURL,
  getURLsFromHTML,
  crawlPage
}
