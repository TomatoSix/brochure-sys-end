const service = require("../service/article.service");

const addLike = async (ctx, next) => {
  console.log(ctx);
};
const decreaseLike = async (ctx, next) => {
  console.log(ctx);
};

const getLikeCount = async (ctx, next) => {
  const params = ctx.request.body;

  const count = service.getLikeCount(params);
  console.log(count, "value");
};

module.exports = {
  addLike,
  decreaseLike,
  getLikeCount,
};
