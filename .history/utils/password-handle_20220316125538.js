const crypto = require('crypto')

const md5password = (password) => {
  // 采用md5加密方式
  crypto.createHash('md5');
  const result = md5.update(password).digest(16)
  return result
}