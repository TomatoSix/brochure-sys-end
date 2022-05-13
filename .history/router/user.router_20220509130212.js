const Router = require("koa-router");
const {
  create,
  getUserInfo,
  getPersonData,
  setPersonData,
} = require("../controller/user.controller");
const { avatarInfo } = require("../controller/file.controller");
const { verifyUser, handlePassword } = require("../middleware/user.middleware");

const userRouter = new Router({ prefix: "/users" });

// 创建注册接口
userRouter.post("/register", verifyUser, handlePassword, create);

// 获取用户信息
// userRouter.post("/getUserInfo/:id", verifyUserById, getUserInfo);
// userRouter.post("/getUserInfo/:id", getUserInfo);

// 获取用户个人资料, 包括用户名，职位，公司等等
userRouter.get("/getPersonData/:id", getPersonData);
// 设置用户个人资料
userRouter.post("/setPersonData", setPersonData);

// 获取头像
userRouter.get("/:userId/avatar", avatarInfo);
module.exports = userRouter;
