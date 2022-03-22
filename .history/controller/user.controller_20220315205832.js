const service = require('../service/user.service.js')
class UserController {
  async create(ctx, next) {
    console.log("登陆成功啦");
    ctx.body = "登陆成功啦"

    // 查询数据库
    const result = await service.create(user)

    // 返回数据
    ctx.body = result
  }
}
module.exports = new UserController()