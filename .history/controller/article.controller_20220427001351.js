const service = require("../service/article.service");
class articleController {
  async createArticle(ctx, next) {
    console.log(ctx.request.body, "body");
    // // 获取用户传递的参数
    const articleData = ctx.request.body;
    // // 查询数据库
    const result = await service.createArticle(articleData);
    console.log(result, "result");
    // 如果数据插入成功
    if (result.length) {
      // 返回数据
      ctx.body = "文章保存成功";
    }
  }

  async getArticleById(ctx, next) {
    console.log(ctx.request.body, "body");
    // // 获取用户传递的参数
    const id = ctx.request.body;
    // // 查询数据库
    const result = await service.createArticle(articleData);
    console.log(result, "result");
    // 如果数据插入成功
    if (result.length) {
      // 返回数据
      ctx.body = "文章保存成功";
    }
  }
}

module.exports = new articleController();
