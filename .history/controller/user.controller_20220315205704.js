const service = reuire('../service/user.service.js')
class UserController {
  async create(ctx, next) {
    console.log("登陆成功啦");
    ctx.body = "登陆成功啦"

    // 查询数据库
  }
}
module.exports = new UserController()