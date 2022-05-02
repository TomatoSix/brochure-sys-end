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

  /**
   * @desc 获取用户个人资料
   * @date 2022-04-30
   * @param {any} ctx
   * @param {any} next
   * @returns {any}
   */
  async getPersonData(ctx, next) {
    const { id } = ctx.params;
    const result = await service.getPersonData(id);
    if (result.length) {
      // 返回数据
      ctx.body = result[0];
    }
  }

  /**
   * @desc 设置用户个人资料
   * @date 2022-04-30
   * @param {any} xtc
   * @param {any} next
   * @returns {any}
   */
  async setPersonData(ctx, next) {
    const data = ctx.request.data;
    console.log(data, "data");
    const result = await service.setPersonData(data);
    if (result.length) {
      // 返回数据
      ctx.body = {
        returnCode: "0000",
        content: "设置成功",
      };
    }
  }
}
module.exports = new UserController();
