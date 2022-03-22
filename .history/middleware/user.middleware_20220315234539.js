// 验证用户
const verifyUser = async (ctx, next) => {

  await next()
}

module.exports = {
  verifyUser
}