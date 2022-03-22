const errorType = require('../constants/error-types')

const errorHandler = (error, ctx) => {
  switch (error.message) {
    case errorType.NAME_REGISTER_ERROR: 
      status = 400
  }
  ctx.status = 404
  ctx.body = error.message
}

module.exports = errorHandler