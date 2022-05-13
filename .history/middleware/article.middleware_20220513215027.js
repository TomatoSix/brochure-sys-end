const addLike = async(ctx, next) {
  console.log(ctx);
}
const decreaseLike = async(ctx, next) {
  console.log(ctx);
  
}

const getLikeCount = async(ctx, next) {

}

module.exports = {
  addLike,
  decreaseLike,
  getLikeCount
};
