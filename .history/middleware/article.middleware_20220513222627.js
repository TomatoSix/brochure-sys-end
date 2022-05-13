const service = require("../service/article.service");

// 赞+1
const addLike = async (ctx, next) => {
  await service.addLike(ctx.count + 1);
  next();
};
// 赞-1
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
