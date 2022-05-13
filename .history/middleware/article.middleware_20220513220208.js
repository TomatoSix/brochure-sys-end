const service = require("../service/article.service");

const addLike = async (ctx, next) => {
  console.log(ctx);
};
const decreaseLike = async (ctx, next) => {
  console.log(ctx);
};

const getLikeCount = async (ctx, next) => {
  const { userId, articleId } = ctx.request.body;
  console.log(userId, articleId, "1");
  const value = service.getLikeCount(userId, articleId);
};

module.exports = {
  addLike,
  decreaseLike,
  getLikeCount,
};
