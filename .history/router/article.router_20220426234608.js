const Router = require("koa-router");
const { createArticle } = require("../controller/article.controller");
const articleRouter = new Router({ prefix: "/article" });

// 保存文章
articleRouter.post("/savePaper", createArticle);

module.exports = articleRouter;
