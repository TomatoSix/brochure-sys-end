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
  const count = service.getLikeCount(userId, articleId);
  console.log(value, "value");
};

module.exports = {
  addLike,
  decreaseLike,
  getLikeCount,
};
