const authRouter = require("../router/auth.router");

// 登录控制器
class AuthController {
  /**
   * @desc 登录，返回token
   * @date 2022-03-16
   * @param {any} ctx
   * @param {any} next
   * @returns {any}
   */
  async login(ctx, next) {
    const {name, password} = ctx.user



    // 返回token
    ctx.body = "登陆成功"
  }
}

module.exports = new AuthController()