const errorType = require('../constants/error-types')

const errorHandler = (error, ctx) => {
  let status, message
  switch (error.message) {
    case errorType.USER_ALREADY_EXISTS: 
      status = 400
      message = "创建用户失败"
      break

    default:
      status = 404
      message = "未知错误"
  }
  ctx.status = status
  ctx.body = message
}

module.exports = errorHandler