const { describe, test, expect } = require('@jest/globals')
const { normalizeURL, getURLsFromHTML } = require('./crawl.js')

describe('normalizeURL', () => {
  test('http', () => {
    const url = "http://example.com/path"
    const expected = "example.com/path"
    expect(normalizeURL(url)).toEqual(expected)
  })

  test('https', () => {
    const https = "https://example.com/path"
    const expected = "example.com/path"
    expect(normalizeURL(https)).toEqual(expected)
  })

  test('slash', () => {
    const slash = "http://example.com/path/"
    const expected = "example.com/path"
    expect(normalizeURL(slash)).toEqual(expected)
  })
})

describe('getURLsFromHTML', () => {
  test('absolute url', () => {
    const baseUrl = "http://example.com"
    const html = `<html><body><a href="http://example.com">home page</a></body></html>`

    const expected = ["http://example.com/"]
    expect(getURLsFromHTML(html, baseUrl)).toEqual(expected)
  })

  test('relative url', () => {
    const baseUrl = "http://example.com"
    const html = `<html><body><a href="/about">about page</a></body></html>`

    const expected = ["http://example.com/about"]
    expect(getURLsFromHTML(html, baseUrl)).toEqual(expected)
  })

  test('absolute and relative', () => {
    const baseUrl = "http://example.com"
    const html = `<html><body><a href="http:/example.com">home page</a><a href="/about">about page</a></body></html>`

    const expected = ["http://example.com/", "http://example.com/about"]

    expect(getURLsFromHTML(html, baseUrl)).toEqual(expected)
  })

  test('other domain', () => {
    const baseUrl = "http://example.com"
    const html = `<html><body><a href="http://foobar.com">home page</a></body></html>`

    const expected = ["http://foobar.com/"]
    expect(getURLsFromHTML(html, baseUrl)).toEqual(expected)
  })
})
