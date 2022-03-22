// 验证用户
const verifyUser = async (ctx, next) => {

  const {name, password} = ctx.request.body
  
  // 1. 判断用户名或密码不为空，前端已经判断过

  // 2. 判断用户名有没有被注册过
  if (1 === 1) {
    console.log("储物啦");
    const error = new Error("用户创建失败")
    // 错误需要返回,第一个参数是监听的事件, 后面两个是传入的参数
    return ctx.app.emit('error', error, ctx)
  }

  await next()
}

module.exports = {
  verifyUser
}