const Router = require("koa-router");
const { create } = require("../controller/user.controller");
const { verifyUser, handlePassword } = require("../middleware/user.middleware");

const userRouter = new Router({ prefix: "/users" });

// 创建注册接口
userRouter.post("/register", verifyUser, handlePassword, create);

// 获取用户信息

module.exports = userRouter;
