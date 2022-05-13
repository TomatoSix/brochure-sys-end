const service = require("../service/article.service");

// 赞+1
const addLike = async (ctx, next) => {
  await service.changeLike(ctx.count + 1);
  next();
};
// 赞-1
const decreaseLike = async (ctx, next) => {
  await service.changeLike(ctx.count - 1);
  next();
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
