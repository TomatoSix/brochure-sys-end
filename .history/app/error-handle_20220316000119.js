const errorHandler = (error, ctx) => {
  console.log(error.message);

  ctx.status = 404
  ctx.body = error。message
}

module.exports = errorHandler