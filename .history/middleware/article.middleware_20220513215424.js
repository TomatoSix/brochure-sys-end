const addLike = async (ctx, next) => {
  console.log(ctx);
};
const decreaseLike = async (ctx, next) => {
  console.log(ctx);
};

const getLikeCount = async (ctx, next) => {
  const { userId, articleId } = ctx.request.body;
};

module.exports = {
  addLike,
  decreaseLike,
  getLikeCount,
};
