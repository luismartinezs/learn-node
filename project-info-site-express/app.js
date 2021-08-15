const http = require('http')
const express = require('express')
require('dotenv').config()
var path = require('path')

const app = express()

const port = process.env.PORT || 8080

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'))
})

app.get('/contact-me', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact-me.html'))
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '404.html'))
})

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`)
})

module.exports = app
