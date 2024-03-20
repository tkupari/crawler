const { argv, exit } = require('node:process')
const { crawlPage } = require('./crawl.js')

function main() {
  if (argv.length !== 3) {
    console.log('url required as argument')
    exit(1)
  }

  const baseUrl = argv[2]
  console.log(`starting to crawl ${baseUrl}`)
  crawlPage(baseUrl)
}

main()
