const service = require('../service/user.service.js')
class UserController {
  async create(ctx, next) {
    console.log("登陆成功啦");
    ctx.body = "登陆成功啦"

    // 查询数据库
    service.create(user)

    // 返回数据
  }
}
module.exports = new UserController()