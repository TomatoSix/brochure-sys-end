const errorType = require('../constants/error-types')
const service = require('../service/user.service')
// 验证用户
const verifyUser = async (ctx, next) => {

  const {name, password} = ctx.request.body
  
  // 1. 判断用户名或密码不为空，前端已经判断过

  // 2. 判断用户名有没有被注册过
  const result = await service.getUserByName(name)
  console.log(result, 'result');
  if (result.length) {
    const error = new Error(errorType.USER_ALREADY_EXISTS)
    // 错误需要返回,第一个参数是监听的事件, 后面两个是传入的参数
    return ctx.app.emit('error', error, ctx)
  }

  await next()
}

module.exports = {
  verifyUser
}