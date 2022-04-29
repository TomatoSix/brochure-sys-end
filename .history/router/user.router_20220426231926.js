const Router = require("koa-router");
const { create, getUserInfo } = require("../controller/user.controller");
const {
  verifyUser,
  handlePassword,
  verifyUserById,
} = require("../middleware/user.middleware");

const userRouter = new Router({ prefix: "/users" });

// 创建注册接口
userRouter.post("/register", verifyUser, handlePassword, create);

// 获取用户信息
// userRouter.post("/getUserInfo/:id", verifyUserById, getUserInfo);
userRouter.post("/getUserInfo/:id", getUserInfo);

module.exports = userRouter;
