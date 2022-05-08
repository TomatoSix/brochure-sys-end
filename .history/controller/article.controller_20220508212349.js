const service = require("../service/article.service");
class articleController {
  async createArticle(ctx, next) {
    // // 获取用户传递的参数
    const articleData = ctx.request.body;
    // // 查询数据库
    const result = await service.createArticle(articleData);
    console.log(result, "111111");
    // 如果数据插入成功
    if (result.length) {
      // 返回数据
      ctx.body = { returnCode: "0000", data: "文章创建成功" };
    }
  }

  /**
   * @desc 修改文章
   * @date 2022-05-03
   * @param {any} ctx
   * @param {any} next
   * @returns {any}
   */
  async editPaper(ctx, next) {
    const data = ctx.request.body;
    const result = await service.editPaper(data);
    console.log(result, "111111");
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
    console.log("6666");
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
    const params = ctx.request.body;
    const result = await service.brochureSubmit(params);
    console.log(result[0], "告诉我结果");
    if (result.length) {
      ctx.body = {
        returnCode: "0000",
        data: result[0],
      };
    }
  }
  // 根据小册id获取小册信息
  async getBrochureById(ctx, next) {
    const { id } = ctx.params;
    console.log(id, "id");
    const result = await service.getBrochureById(id);
    if (result.length) {
      ctx.body = {
        returnCode: "0000",
        data: result[0][0],
      };
    }
  }

  // 获取所有小册信息
  async getBrochureAll(ctx, next) {
    const result = await service.getBrochureAll();
    if (result.length) {
      ctx.body = {
        returnCode: "0000",
        data: result[0],
      };
    }
  }

  // 根据用户id获取小册所有信息
  async getBrochureByUserId(ctx, next) {
    const { id } = ctx.params;
    const result = await service.getBrochureByUserId(id);
    if (result.length) {
      ctx.body = {
        returnCode: "0000",
        data: result[0],
      };
    }
  }

  // 根据小册id获取小册章节
  async getChapterAllByBrochureId(ctx, next) {
    const { id } = ctx.params;
    const result = await service.getChapterAllByBrochureId(id);
    if (result.length) {
      ctx.body = {
        returnCode: "0000",
        data: result[0],
      };
    }
  }

  // 添加章节
  async addChapter(ctx, next) {
    const data = ctx.request.body;
    const result = await service.addChapter(data);
    if (result.length) {
      ctx.body = {
        returnCode: "0000",
        data: "保存成功",
      };
    }
  }

  // 修改章节内容
  async reviseChapterContent(ctx, next) {
    const data = ctx.request.body;
    const result = await service.reviseChapterContent(data);
    console.log(result, "结果出来吧");
    if (result.length) {
      ctx.body = {
        returnCode: "0000",
        data: "修改成功",
      };
    }
  }

  // 小册发布
  async brochureEmit(ctx, next) {
    const data = ctx.request.body;
    console.log(data, "data1");
    const result = await service.brochureEmit(data);
    if (result.length) {
      ctx.body = {
        returnCode: "0000",
        data: "小册发布成功",
      };
    }
  }
  // 文章发布
  async emitPaper(ctx, next) {
    const data = ctx.request.body;
    const result = await service.emitPaper(data);
    console.log(result, "result");

    if (result.length) {
      ctx.body = {
        returnCode: "0000",
        data: "文章发布成功",
      };
    }
  }

  // 购买小册
  async purchaseBrochure(ctx, next) {
    const data = ctx.request.body;
    const result = await service.purchaseBrochure(data);

    if (result.length) {
      ctx.body = {
        returnCode: "0000",
        data: "购买成功",
      };
    }
  }
  // 是否购买
  async isPurchase(ctx, next) {
    const data = ctx.request.body;
    console.log(data, "999");
    const result = await service.isPurchase(data);

    console.log(result, "result");

    if (result[0].length) {
      ctx.body = {
        returnCode: "0000",
        data: {
          isPurchase: 1,
        },
      };
    } else {
      ctx.body = {
        returnCode: "0000",
        data: {
          isPurchase: 0,
        },
      };
    }
  }

  // 获取文章各种数据，点赞， 评论，收藏等等
  async getArticleData(ctx, next) {
    const { id } = ctx.params;

    const result = await service.getArticleData(id);
    console.log(result, "result4");
    if (result.length) {
      ctx.body = {
        returnCode: "0000",
        data: result[0],
      };
    }
  }

  // 获取订单列表
  async getOrderList(ctx, next) {
    const { id } = ctx.params;
    console.log(id, "id");
    const result = await service.getOrderList(id);
    console.log(result, "resl");
    if (result.length) {
      ctx.body = {
        returnCode: "0000",
        data: result,
      };
    }
  }

  // 获取已购买的小册
  async brochureBought(ctx, next) {
    const { id } = ctx.params;
  }
}

module.exports = new articleController();
