const jwt = require('jsonwebtoken')
const { PRIVATE_KEY } = require('../app/config')
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
    const {id, name} = ctx.user

    // 生成token
    const token = jwt.sign({id, name}, PRIVATE_KEY， {
      expiresIn: 60 * 60 * 24,
      algorithm: 'RS256'
    })


    console.log(ctx.user, 'ctx.user');



    // 返回token
    ctx.body = {
      id, name, token
    }
  }
}

module.exports = new AuthController()