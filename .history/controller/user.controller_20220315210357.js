const service = require('../service/user.service.js')

class UserController {
  async create(ctx, next) {
    const user = ctx.request.body
    console.log(user, 'user');

    // 查询数据库
    const result = await service.create(user)

    // 返回数据
    ctx.body = result
  }
}
module.exports = new UserController()