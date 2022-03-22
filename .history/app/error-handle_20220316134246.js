const errorType = require('../constants/error-types')

const errorHandler = (error, ctx) => {
  let status, message
  switch (error.message) {
    case errorType.USER_ALREADY_EXISTS: 
      status = 409
      message = "用户名已存在"
      break
    case errorType.USER_DOES_NOT_EXISTS:
      status = 400
      message = "用户名不存在"
      break
    case errorType.PASSWORD_IS_INCORRECT:
      status = 400
      message = "密码错误"
    default:
      status = 404
      message = "未知错误"
  }
  
  ctx.status = status
  ctx.body = message
}

module.exports = errorHandler