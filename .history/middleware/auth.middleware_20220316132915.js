const { getUserByName } = require('../service/user.service')

const verifyLogin = async (ctx, next) =>{
  // 1. 获取用户名和密码
  const {name, password} = ctx.request.body

  // 2. 判断用户名或密码是否为空，前端已校验

  // 3. 判断用户是否存在
  const result = await getUserByName(name)

  if (result.length) {
    const erroe = new Error()
  }

  // 4. 判断密码是否和数据库中的密码一致
}
module.exports = {
  verifyLogin
}