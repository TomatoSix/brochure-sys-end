const service = require("../service/user.service.js");

class UserController {
  // 创建用户
  async create(ctx, next) {
    // 获取用户传递的参数
    const user = ctx.request.body;

    // 查询数据库
    const result = await service.create(user);
    console.log(result, "result");

    // 如果数据插入成功
    if (result.length) {
      // 返回数据
      ctx.body = "注册用户成功";
    }
  }

  async getUserInfo(ctx, next) {
    const user = ctx.request.body;
    const result = await service.getUserById(user);
    console.log(result, "获取用户信息");
  }
}
module.exports = new UserController();
