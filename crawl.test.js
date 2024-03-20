const { test, expect } = require('@jest/globals')
const { normalizeURL } = require('./crawl.js')

test('same url is equal to itself', () => {
  const url = "http://example.com"
  expect(normalizeURL(url)).toEqual(normalizeURL(url))
})

test('https and http are the same', () => {
  const http = "http://example.com"
  const https = "https://example.com"
  expect(normalizeURL(http)).toEqual(normalizeURL(https))
})

test('trailing slash does not affect', () => {
  const slash = "http://example.com/path/"
  const noSlash = "http://example.com/path"
  expect(normalizeURL(slash)).toEqual(normalizeURL(noSlash))
})
