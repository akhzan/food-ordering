const data = require('./api/db.server.json')

module.exports = (req, res) => {
  res.send(data)
}
