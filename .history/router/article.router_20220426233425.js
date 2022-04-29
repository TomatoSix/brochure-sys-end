const Router = require("koa-router");

const articleRouter = new Router();

const { login } = require("../controller/auth.controller");
const { verifyLogin } = require("../middleware/auth.middleware.js");
// 创建登录接口
// 创建注册接口
articleRouter.post("/register", verifyUser, handlePassword, create);

// 获取用户信息
// userRouter.post("/getUserInfo/:id", verifyUserById, getUserInfo);
articleRouter.post("/getUserInfo/:id", getUserInfo);

module.exports = authRouter;
