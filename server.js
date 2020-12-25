const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const data = require('./db.server.json')

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/api/data', (req, res) => {
  res.send({ data })
})

app.use(express.static(path.join(__dirname, 'build')))
app.use(express.static(path.join(__dirname, 'public')))
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(port, () => console.log(`Listening on port ${port}`))
