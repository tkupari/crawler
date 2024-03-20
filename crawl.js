function normalizeURL(url) {
  const parsedUrl = new URL(url)
  let normalized = `${parsedUrl.host}${parsedUrl.pathname}`
  if (normalized.length > 0 && normalized.slice(-1) === '/') {
    normalized = normalized.slice(0, -1)
  }
  return normalized

}

module.exports = {
  normalizeURL
}
