const crypto = require('crypto')

const md5password = (password) => {
  crypto.createHash('md5')
}