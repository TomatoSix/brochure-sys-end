const crypto = require('crypto')

const md5password = (password) => {
  // 采用md5加密方式
  const md5 = crypto.createHash('md5');
  // 返回16进制
  const result = md5.update(password).digest('hex')
  return result
}