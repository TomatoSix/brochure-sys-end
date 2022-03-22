const service = require('../service/user.service.js')

class UserController {
  // 创建用户
  async create(ctx, next) {
    console.log(ctx, 'xtc');
    // 获取用户传递的参数
    const user = ctx.request.body
    console.log(user, 'user');

    // 查询数据库
    const result = await service.create(user)

    // 返回数据
    ctx.body = result
    
  } 
}
module.exports = new UserController()