const service = require("../service/comment.service.js");

class CommentController {
  async create(ctx, next) {
    const { articleId, content, count } = ctx.request.body;
    const { id } = ctx.user;
    console.log(ctx.request.body, "000");
    const result = await service.create(articleId, content, id, count);

    ctx.body = {
      returnCode: "0000",
      data: "评论发表成功",
    };
  }

  async reply(ctx, next) {
    const { articleId, content } = ctx.request.body;
    const { commentId } = ctx.params;
    console.log(articleId, content, commentId);
    const { id } = ctx.user;
    const result = await service.reply(articleId, content, id, commentId);
    if (result.length) {
      ctx.body = {
        returnCode: "0000",
        data: "评论发表成功",
      };
    }
  }

  async update(ctx, next) {
    const { commentId } = ctx.params;
    const { content } = ctx.request.body;
    const result = await service.update(commentId, content);
    ctx.body = result;
  }

  async remove(ctx, next) {
    const { commentId } = ctx.params;
    const result = await service.remove(commentId);
    ctx.body = result;
  }

  async list(ctx, next) {
    const { articleId } = ctx.params;
    console.log(articleId, "articleId");
    const result = await service.getCommentsByMomentId(articleId);
    if (result.length) {
      ctx.body = {
        returnCode: "0000",
        data: result,
      };
    }
  }
}

module.exports = new CommentController();
