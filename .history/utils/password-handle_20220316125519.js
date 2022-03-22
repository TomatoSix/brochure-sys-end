const crypto = require('crypto')

const md5password = (password) => {
  // 采用md5加密方式
  crypto.createHash('md5');
  md5.update(password).digest()
}