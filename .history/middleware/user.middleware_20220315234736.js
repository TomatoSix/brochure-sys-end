// 验证用户
const verifyUser = async (ctx, next) => {
  const {name, password} = ctx.request.body
  
  // 1. 判断用户名或密码不为空，前端已经判断过

  // 2. 判断用户名有没有被注册过

  await next()
}

module.exports = {
  verifyUser
}