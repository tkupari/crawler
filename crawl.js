function normalizeURL(url) {
  const parsedUrl = new URL(url)
  return `${parsedUrl.host}${parsedUrl.path}`
}

module.exports = {
  normalizeURL
}
