const service = require("../service/article.service");

const addLike = async (ctx, next) => {
  console.log(ctx.count + 1, "count");
  const count = await service.addLike(ctx.count + 1);

  // next();
};
const decreaseLike = async (ctx, next) => {
  console.log(ctx);
};

const getLikeCount = async (ctx, next) => {
  const params = ctx.request.body;

  const count = await service.getLikeCount(params);

  ctx.count = count;
  next();
};

module.exports = {
  addLike,
  decreaseLike,
  getLikeCount,
};
