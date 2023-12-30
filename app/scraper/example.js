$print = console.log

const scraper = require("@danicoding/scraper")

const q = "https://vt.tiktok.com/ZSNnsxxQ9/"

if (!q) $print("Params not found!")
scraper.downloader.tiktok(q)
.then(data => {
  let res = data
  if (!res) $print("Data not found!")
  $print(data)
})
