const http = require('http')
const fs = require('fs')
require('dotenv').config()

const port = process.env.PORT || 8080

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html')
  res.statusCode = 200

  if (req.url === '/' || req.url === '/index.html') {
    const data = fs.readFileSync('index.html')
    res.end(data)
  } else if (req.url === '/about') {
    const data = fs.readFileSync('about.html')
    res.end(data)
  } else if (req.url === '/contact-me') {
    const data = fs.readFileSync('contact-me.html')
    res.end(data)
  } else {
    const data = fs.readFileSync('404.html')
    res.end(data)
  }
})

server.listen(port, () => {
  console.log(`Server running at port ${port}`)
})
