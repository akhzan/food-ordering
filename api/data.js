const data = require('./db.server.json')

module.exports = (req, res) => {
  res.send(data)
}
