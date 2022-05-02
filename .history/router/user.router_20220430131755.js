const Router = require("koa-router");
const { create, getUserInfo } = require("../controller/user.controller");
const { verifyUser, handlePassword } = require("../middleware/user.middleware");

const userRouter = new Router({ prefix: "/users" });

// 创建注册接口
userRouter.post("/register", verifyUser, handlePassword, create);

// 获取用户信息
// userRouter.post("/getUserInfo/:id", verifyUserById, getUserInfo);
userRouter.post("/getUserInfo/:id", getUserInfo);

// 获取用户个人资料, 包括用户名，职位，公司等等
userRouter.get("getUserInfo");
module.exports = userRouter;
