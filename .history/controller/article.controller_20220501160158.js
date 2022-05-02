const service = require("../service/article.service");
class articleController {
  async createArticle(ctx, next) {
    console.log(ctx.request.body, "hello");
    // // 获取用户传递的参数
    const articleData = ctx.request.body;
    // // 查询数据库
    const result = await service.createArticle(articleData);
    console.log(result, "result");
    // 如果数据插入成功
    if (result.length) {
      // 返回数据
      ctx.body = { returnCode: "0000", data: "文章保存成功" };
    }
  }

  /**
   * @desc 根据文章ID获取文章信息
   * @date 2022-04-29
   * @param {any} ctx
   * @param {any} next
   * @returns {any}
   */
  async getArticleById(ctx, next) {
    console.log(ctx.params, "body");
    // // 获取用户传递的参数
    const { id } = ctx.params;
    // // 查询数据库
    const result = await service.getArticleDataById(id);
    console.log(result, "result");
    // 如果数据插入成功
    if (result.length) {
      // 返回数据
      ctx.body = {
        returnCode: "0000",
        data: result[0][0],
      };
    }
  }

  /**
   * @desc 获取所有文章信息
   * @date 2022-04-29
   * @param {any} ctx
   * @param {any} next
   * @returns {any}
   */
  async getArticleAll(ctx, next) {
    const result = await service.getArticleDataAll();
    if (result.length) {
      // 返回数据
      ctx.body = {
        returnCode: "0000",
        data: result[0],
      };
    }
  }

  /**
   * @desc 获取用户的所有文章
   * @date 2022-05-01
   * @param {any} ctx
   * @param {any} next
   * @returns {any}
   */
  async getArticleByUserId(ctx, next) {
    const { id } = ctx.params;
    const result = await service.getArticleByUserId(id);
    if (result.length) {
      ctx.body = {
        returnCode: "0000",
        data: result[0],
      };
    }
  }

  /**
   * @desc 小册提交申请
   * @date 2022-05-01
   * @param {any} ctx
   * @param {any} next
   * @returns {any}
   */
  async brochureSubmit(ctx, next) {
    console.log(ctx.request.body);
    const params = ctx.request.body;
    const result = await service.brochureSubmit(params);
    if (result.length) {
      ctx.body = {
        returnCode: "0000",
        data: "小册申请成功",
      };
    }
  }
  // 根据小册id获取小册信息
  async getBrochureById(ctx, next) {
    const { id } = ctx.params;
    const result = await service.getBrochureById(id);
    if (result.length) {
      ctx.body = {
        returnCode: "0000",
        data: result[0],
      };
    }
  }

  // 获取所有小册信息
  async getBrochureAll(ctx, next) {
    const id = ctx.params;
    const result = await service.getBrochureById(id);
    if (result.length) {
      ctx.body = {
        returnCode: "0000",
        data: result[0],
      };
    }
  }

  // 根据用户id获取小册所有信息
  async getBrochureByUserId(ctx, next) {
    const id = ctx.params;
    const result = await service.getBrochureById(id);
    if (result.length) {
      ctx.body = {
        returnCode: "0000",
        data: result[0],
      };
    }
  }
}

module.exports = new articleController();
