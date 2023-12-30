const express = require('express')
const route = express.Router()
const scraper = require('../scraper')

route.get('/', function (req, res) {
  res.send('query')
})

route.get('/tiktok', function (req, res) {
  let url = req.query.url
  if (!url) return res.json('Enter URL parameters')
  
  scraper.downloader.tiktok(url)
  .then(data => {
    res.json({
      status: "OK",
  	code: 200,
  	data: data
    })
  })
})

route.get('/youtube', function (req, res) {
  let url = req.query.url
  if (!url) return res.json('Enter URL parameters')
  
  scraper.downloader.youtube(url)
  .then(data => {
    res.json({
      status: "OK",
  	code: 200,
  	data: data
    })
  })
})

route.get('/facebook', function (req, res) {
  let url = req.query.url
  if (!url) return res.json('Enter URL parameters')
  
  scraper.downloader.facebook(url)
  .then(data => {
    res.json({
      status: "OK",
  	code: 200,
  	data: data
    })
  })
})

route.get('/instagram', function (req, res) {
  let url = req.query.url
  if (!url) return res.json('Enter URL parameters')
  
  scraper.downloader.instagram(url)
  .then(data => {
    res.json({
      status: "OK",
  	code: 200,
  	data: data
    })
  })
})

route.get('/twitter', function (req, res) {
  let url = req.query.url
  if (!url) return res.json('Enter URL parameters')
  
  scraper.downloader.twitter(url)
  .then(data => {
    res.json({
      status: "OK",
  	code: 200,
  	data: data
    })
  })
})

module.exports = route