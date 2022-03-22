const verifyLogin = async (ctx, next) =>{
  // 1. 获取用户名和密码
  const {name, password} = ctx.request.body
}