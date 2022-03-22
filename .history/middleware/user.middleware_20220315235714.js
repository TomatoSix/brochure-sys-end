// 验证用户
const verifyUser = async (ctx, next) => {

  const {name, password} = ctx.request.body
  
  // 1. 判断用户名或密码不为空，前端已经判断过

  // 2. 判断用户名有没有被注册过
  if (true) {
    const error = new Error("用户创建失败")
    ctx.app.emit(erroe, ctx)
  }

  await next()
}

module.exports = {
  verifyUser
}