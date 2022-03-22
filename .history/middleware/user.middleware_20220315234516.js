// 验证用户
const verifyUser = (ctx, next) {

  await next()
}

module.exports = {
  verifyUser
}