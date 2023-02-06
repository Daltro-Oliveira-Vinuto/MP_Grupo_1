const crypto = require('crypto').randomBytes(2566).toString('hex')

module.exports = {
  uri: 'mongodb://127.0.0.1:27017/projeto-mp',
  secret: crypto,
  db: 'projeto-mp'
}
