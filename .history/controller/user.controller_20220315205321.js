class UserController {
  async create(ctx, next) {
    console.log("登陆成功啦");
  }
}
module.exports = new UserController()