const { test, expect } = require('@jest/globals')
const { normalizeURL } = require('./crawl.js')

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
