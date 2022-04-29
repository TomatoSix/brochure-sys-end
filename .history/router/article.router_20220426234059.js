const Router = require("koa-router");

const articleRouter = new Router({ prefix: "/article" });

// 保存文章
articleRouter.post("/savePaper", verifyUser, handlePassword, create);

module.exports = authRouter;
