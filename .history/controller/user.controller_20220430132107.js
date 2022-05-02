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

  /**
   * @desc 获取用户信息
   * @date 2022-04-30
   * @param {any} ctx
   * @param {any} next
   * @returns {any}
   */
  async getUserInfo(ctx, next) {
    console.log(ctx.params, "query");
    const { id } = ctx.params;
    const result = await service.getUserById(id);
    if (result.length) {
      // 返回数据
      ctx.body = result[0];
    }
  }

  async getPersonData(ctx, next) {}
}
module.exports = new UserController();
