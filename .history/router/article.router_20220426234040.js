const Router = require("koa-router");

const { login } = require("../controller/auth.controller");
const { verifyLogin } = require("../middleware/auth.middleware.js");

const articleRouter = new Router({ prefix: "/article" });

// 保存文章
articleRouter.post("/savePaper", verifyUser, handlePassword, create);

module.exports = authRouter;
