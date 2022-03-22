const errorType = require('../constants/error-types')

const errorHandler = (error, ctx) => {
  let status, message
  switch (error.message) {
    case errorType.NAME_REGISTER_ERROR: 
      status = 400
      message = "创建用户失败"
  }
  ctx.status = 404
  ctx.body = error.message
}

module.exports = errorHandler