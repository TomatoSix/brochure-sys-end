const authRouter = require("../router/auth.router");

// 登录控制器
class AuthController {
  /**
   * @desc 注册
   * @date 2022-03-16
   * @param {any} ctx
   * @param {any} next
   * @returns {any}
   */
  async login(ctx, next) {
    const {name} = ctx.request.body


    // 返回token
    ctx.body = "登陆成功"
  }
}

module.exports = new AuthController()